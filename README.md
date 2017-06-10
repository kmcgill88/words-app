# words-app
A dumb NodeJS app to test docker, clustering and mongodb

## Usage
- Run `docker-compose up -d`
- `POST` a Noun to `localhost:3000/noun`
`{ "word":"Iowa" }`
- `POST` an Adjective to `localhost:3000/adjective`
`{ "word":"Breezy" }`
- `GET` a combo at `localhost:3000/`
`Breezy_Iowa`
