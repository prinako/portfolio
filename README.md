# Prince Nyarko Portfolio

A bilingual developer portfolio built with Deno, TypeScript, server-rendered
HTML, and plain CSS. The site is framework-free, easy to deploy, and organized
so English and Brazilian Portuguese content can evolve independently.

## Features

- Native Deno HTTP server with `Deno.serve`
- Server-rendered semantic HTML
- English (`en-us`) and Brazilian Portuguese (`pt-br`) pages
- Automatic language selection on `/` from the browser `Accept-Language` header
- English fallback when the browser language is not English or Portuguese
- Shared profile, social link, and technology data
- Separate CSS entry files for each language
- Responsive dark visual system
- `/health` endpoint for deployment checks

## Routes

```text
/          Uses Accept-Language and falls back to en-us
/en-us     English page
/pt-br     Brazilian Portuguese page
/health    Health check endpoint
```

Public stylesheet routes:

```text
/styles.css         English stylesheet alias
/styles.en-us.css   English stylesheet
/styles.pt-br.css   Portuguese stylesheet
/styles.base.css    Shared base stylesheet
```

## Project Structure

```text
.
├── Dockerfile
├── docker-compose.yml
├── deno.json
├── main.ts
├── src
│   ├── data
│   │   ├── en-us.ts
│   │   ├── index.ts
│   │   ├── pt-br.ts
│   │   ├── shared.ts
│   │   └── types.ts
│   ├── layout.ts
│   └── styles
│       ├── base.css
│       ├── en-us.css
│       └── pt-br.css
└── README.md
```

## File Guide

- `main.ts` handles HTTP routing, language detection, static CSS serving, and
  the `/health` endpoint.
- `src/layout.ts` renders the page HTML from a language-specific data object.
- `src/data/en-us.ts` contains English portfolio content.
- `src/data/pt-br.ts` contains Brazilian Portuguese portfolio content.
- `src/data/shared.ts` contains values reused by both languages, such as social
  links and common technology lists.
- `src/data/types.ts` defines the content model.
- `src/styles/base.css` contains the shared visual system.
- `src/styles/en-us.css` and `src/styles/pt-br.css` are language-specific CSS
  entry files.

## Requirements

- Deno 2.x or newer

No Node.js, npm, or frontend framework is required.

## Run Locally

Start the development server with file watching:

```sh
deno task dev
```

Start the normal server:

```sh
deno task start
```

Open:

```text
http://localhost:8000
```

## Quality Checks

Type check:

```sh
deno task check
```

Lint:

```sh
deno task lint
```

Format:

```sh
deno task fmt
```

## Editing Content

Update language-specific copy in:

```text
src/data/en-us.ts
src/data/pt-br.ts
```

Use `src/data/shared.ts` for values that should stay the same across languages,
such as profile identity, social links, or repeated technology arrays.

When adding a new field, update the types in `src/data/types.ts` first, then add
the content to each language file and render it in `src/layout.ts`.

## Editing Styles

Shared styles belong in:

```text
src/styles/base.css
```

Language-specific adjustments belong in:

```text
src/styles/en-us.css
src/styles/pt-br.css
```

The language CSS files import the shared base stylesheet through the public
`/styles.base.css` route.

## Docker

Build the image:

```sh
docker build -t portfolio .
```

Run it:

```sh
docker run --rm -p 8000:8000 portfolio
```

Then open:

```text
http://localhost:8000
```

## Docker Compose

Start:

```sh
docker compose up
```

Run in the background:

```sh
docker compose up -d
```

Stop:

```sh
docker compose down
```

Use a different host port:

```sh
PORT=3000 docker compose up
```

## Deployment

The app can run anywhere a Deno process can run, including containers and Deno
Deploy-style environments. It reads `PORT` from the environment and defaults to
`8000` locally.
