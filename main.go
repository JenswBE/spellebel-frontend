package main

import (
	"cmp"
	"errors"
	"flag"
	"fmt"
	"html/template"
	"image"
	"io/fs"
	"os"
	"os/exec"
	"path"
	"runtime"
	"slices"
	"time"

	"github.com/JenswBE/go-pipeline/pipeline"
	"github.com/disintegration/imaging"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"github.com/samber/lo"
	"golang.org/x/sync/errgroup"
)

const (
	aanbodImgPath = "/assets/img/aanbod"
	outputPath    = "output"
)

var imgResizeFilter imaging.ResampleFilter = imaging.Lanczos

func main() {
	// Parse flags
	debug := flag.Bool("debug", false, "Enable debug logging")
	prod := flag.Bool("prod", false, "Enable prod optimizations")
	flag.Parse()

	// Setup logging
	logLevel := zerolog.InfoLevel
	if *debug {
		logLevel = zerolog.DebugLevel
	}
	zerolog.SetGlobalLevel(logLevel)
	zerolog.DurationFieldUnit = time.Second
	consoleWriter := zerolog.ConsoleWriter{Out: os.Stdout, TimeFormat: time.RFC3339}
	log.Logger = log.Output(consoleWriter)

	// Start generation
	start := time.Now()
	log.Info().Msg("Starting to generate website ...")

	// Copy static content
	cmd := exec.Command("cp", "-R", "static/.", "output/")
	output, err := cmd.CombinedOutput()
	if err != nil {
		log.Fatal().Err(err).Str("cmd", cmd.String()).Bytes("output", output).Msg("Failed to copy static assets")
	}

	// Process website
	pipeline.
		NewHTML(template.FuncMap{
			"now":      time.Now,
			"pathJoin": path.Join,
			"rawHTML":  rawHTML,
			"readDir":  readDir,
		}).
		WithTemplatesDir("templates").
		WithDataDir("data").
		WithOutputDir(outputPath).
		LoadGlob("layout_*.gohtml").
		SetData("OutputPath", outputPath).
		SetData("AanbodImgPath", aanbodImgPath).
		SetDataYAML("Aanbod", "Aanbod.yml").
		MustTransformData(aanbodToSlice).
		MustTransformData(processAanbodImages(*prod)).
		SetDataYAML("Contact", "Contact.yml").
		SetData("NavLinks", []struct {
			Title string
			Link  string
		}{
			{Title: "START", Link: "/"},
			{Title: "HOE WERKT HET?", Link: "/hoe-werkt-het/"},
			{Title: "AANBOD", Link: "/aanbod/"},
			{Title: "WIE ZIJN WIJ?", Link: "/wie-zijn-wij/"},
			{Title: "AGENDA", Link: "/agenda/"},
			{Title: "REGLEMENT", Link: "/reglement/"}, // Toegevoegd door Mark
			{Title: "CONTACT", Link: "/contact/"},
		}).
		LoadRenderSingle("page_404.gohtml", "404.html").
		SetData("CurrentNavLink", "START").
		LoadRenderSingle("page_index.gohtml", "index.html").
		SetData("CurrentNavLink", "HOE WERKT HET?").
		LoadRenderSingle("page_hoe-werkt-het.gohtml", "hoe-werkt-het/index.html").
		SetData("CurrentNavLink", "AANBOD").
		LoadRenderSingle("page_aanbod_overzicht.gohtml", "aanbod/index.html").
		LoadRenderRepeated("page_aanbod_detail.gohtml", "Aanbod", "aanbod/{{KEY}}/index.html").
		SetData("CurrentNavLink", "WIE ZIJN WIJ?").
		LoadRenderSingle("page_wie-zijn-wij.gohtml", "wie-zijn-wij/index.html").
		SetData("CurrentNavLink", "SPULMER WORDEN").
		LoadRenderSingle("page_spulmer-worden.gohtml", "spulmer-worden/index.html").
		SetData("CurrentNavLink", "AGENDA").
		LoadRenderSingle("page_agenda.gohtml", "agenda/index.html").
		SetData("CurrentNavLink", "REGLEMENT").
		LoadRenderSingle("page_reglement.gohtml", "reglement/index.html").
		SetData("CurrentNavLink", "CONTACT").
		LoadRenderSingle("page_contact.gohtml", "contact/index.html").
		Must()
	log.Info().Dur("duration_in_seconds", time.Since(start)).Msg("Website successfully generated")
}

func aanbodToSlice(data map[string]any) (map[string]any, error) {
	typed, ok := data["Aanbod"].(map[string]any)
	if !ok {
		return nil, errors.New("data has no key Aanbod with type map[string]any")
	}
	aanbodSlice := lo.Entries(typed)
	slices.SortFunc(aanbodSlice, func(x, y lo.Entry[string, any]) int { return cmp.Compare(x.Key, y.Key) })
	data["AanbodSlice"] = aanbodSlice
	return data, nil
}

func processAanbodImages(isProd bool) func(data map[string]any) (map[string]any, error) {
	return func(data map[string]any) (map[string]any, error) {
		// Only resize on Prod builds
		if !isProd {
			log.Warn().Msg("Aanbod image generation disabled for Dev builds. Enable with --prod flag.")
			return data, nil
		}

		start := time.Now()
		log.Info().Msg("Starting to process images. This might take a while ...")
		typed, ok := data["Aanbod"].(map[string]any)
		if !ok {
			return nil, errors.New("data has no key Aanbod with type map[string]any")
		}
		for k := range typed {
			srcDirPath := path.Join("static", aanbodImgPath, k)
			outputBasePath := path.Join(outputPath, aanbodImgPath, k)
			thumbnailDirPath := path.Join(outputBasePath, "thumbnail")
			if err := os.MkdirAll(thumbnailDirPath, os.ModePerm); err != nil {
				return nil, fmt.Errorf("failed to create directory %v: %w", thumbnailDirPath, err)
			}
			lightboxDirPath := path.Join(outputBasePath, "lightbox")
			if err := os.MkdirAll(lightboxDirPath, os.ModePerm); err != nil {
				return nil, fmt.Errorf("failed to create directory %v: %w", lightboxDirPath, err)
			}
			g := new(errgroup.Group)
			g.SetLimit(runtime.NumCPU())
			for _, file := range readDir(srcDirPath) {
				// Open source file
				g.Go(func(file fs.DirEntry) func() error {
					return func() error {
						log.Debug().Str("img_path", srcDirPath).Msg("Opening image for rotating and resizing")
						srcImgPath := path.Join(srcDirPath, file.Name())
						img, err := imaging.Open(srcImgPath, imaging.AutoOrientation(true))
						if err != nil {
							return fmt.Errorf("failed to open image %v: %w", srcImgPath, err)
						}

						// Resize for thumbnail
						thumbnailPath := path.Join(thumbnailDirPath, file.Name())
						log.Debug().Str("thumbnail_path", thumbnailPath).Msg("Generating and writing thumbnail image")
						thumbnail := imaging.Thumbnail(img, 300, 250, imgResizeFilter)
						err = imaging.Save(thumbnail, thumbnailPath, imaging.JPEGQuality(80))
						if err != nil {
							return fmt.Errorf("failed to write thumbnail to %v: %w", thumbnailPath, err)
						}

						// Resize for lightbox
						lightboxPath := path.Join(lightboxDirPath, file.Name())
						log.Debug().Str("lightbox_path", lightboxPath).Msg("Generating and writing lightbox image")
						lightbox := resizeFit(img, 1920, 1080, imgResizeFilter)
						err = imaging.Save(lightbox, lightboxPath, imaging.JPEGQuality(80))
						if err != nil {
							return fmt.Errorf("failed to write thumbnail to %v: %w", thumbnailPath, err)
						}

						// Drop original file from output
						if err = os.Remove(path.Join(outputBasePath, file.Name())); err != nil {
							return fmt.Errorf("failed to delete image %v: %w", outputBasePath, err)
						}
						return nil
					}
				}(file))
			}
			if err := g.Wait(); err != nil {
				return nil, err
			}
		}
		log.Info().Dur("duration_in_seconds", time.Since(start)).Msg("Processing images successful")
		return data, nil
	}
}

func resizeFit(img image.Image, maxWidth, maxHeight int, filter imaging.ResampleFilter) image.Image {
	bounds := img.Bounds()
	currWidth := bounds.Dx()
	currHeight := bounds.Dy()

	// Image is in landscape
	if currWidth > currHeight {
		if currWidth < maxWidth {
			// Image is already smaller than max width
			return img
		}
		return imaging.Resize(img, maxWidth, 0, filter)
	}

	// Image is in portret or square
	if currHeight < maxHeight {
		// Image is already smaller than max height
		return img
	}
	return imaging.Resize(img, 0, maxHeight, filter)
}

func rawHTML(input string) template.HTML {
	// #nosec G203
	return template.HTML(input)
}

func readDir(dir string) []fs.DirEntry {
	items, err := os.ReadDir(dir)
	if err != nil {
		log.Fatal().Err(err).Str("dir", dir).Msg("Failed to read dir")
	}
	return items
}
