# Spellebel

```bash
# Website genereren
# --prod verkleind foto's van de "aanbod" pagina.
# Aangezien dit wat tijd kost, is het standaard uitgeschakeld.
# Let op: Zonder --prod worden de "aanbod" pagina's niet correct weergegeven!
go run . --prod

# Lokaal development
# => Genereert website automatisch bij elke aanpassing.
# Zie ook bovenstaande notitie i.v.m. "--prod".
go install github.com/cespare/reflex@latest
reflex -vR 'output/.*' -- go run .
```
