# Spellebel

## Overzicht project

- `data`: Bevat eenvoudig aan te passen data zoals contactgegevens, openingsuren, categorieën voor aanbod pagina, ...
- `static`: Bevat alle bestanden die 1-op-1 worden overgenomen naar de `output`.
- `templates`: Bevat alle templates voor de verschillende pagina's.

## Lokaal ontwikkelen

```bash
# Website genereren
# --prod verkleind foto's van de "aanbod" pagina.
# Aangezien dit wat tijd kost, is het standaard uitgeschakeld.
# Let op: Zonder --prod worden de "aanbod" pagina's niet correct weergegeven!
go run . --prod

# Lokaal ontwikkelen
# => Genereert website automatisch bij elke aanpassing.
# Zie ook bovenstaande notitie i.v.m. "--prod".
go install github.com/cespare/reflex@latest
reflex -vR 'output/.*' -- go run .
```

## Nieuwe versie publiceren

Alle wijzigingen die je commit worden onmiddellijk online gezet.
Je moet dus geen tags of releases meer maken.
