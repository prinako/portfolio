# Deno Portfolio Starter

A production-style developer portfolio starter built with Deno, TypeScript,
native HTTP serving, and plain HTML/CSS. It is intentionally framework-free so
the structure stays easy to understand, customize, and scale.

## Features

- Deno-only runtime with `Deno.serve`
- TypeScript modules separated by responsibility
- Semantic server-rendered HTML
- Dark SaaS-style visual system
- Responsive layout with sticky navigation
- Glassmorphism cards and smooth hover states
- Terminal-inspired profile card
- Health endpoint for deployment checks

## Project Structure

```text
.
├── .dockerignore
├── Dockerfile
├── deno.json
├── main.ts
├── src
│   ├── data.ts
│   ├── layout.ts
│   └── styles.css
└── README.md
```

## File Responsibilities

- `main.ts` contains server logic, route handling, static CSS serving, and the
  `/health` endpoint.
- `src/data.ts` contains all portfolio content, including site information,
  skills, projects, and workflow experience.
- `src/layout.ts` contains reusable HTML rendering functions and semantic page
  composition.
- `src/styles.css` contains all styling, responsive behavior, animations, and
  visual theme rules.

## Requirements

- Deno 2.x or newer

No Node.js, npm, package manager, or frontend framework is required.

## Run Locally

Start the development server with file watching:

```sh
deno task dev
```

Start the production-style server:

```sh
deno task start
```

The site is available at:

```text
http://localhost:8000
```

The health endpoint is available at:

```text
http://localhost:8000/health
```

## Run With Docker

Build the container image:

```sh
docker build -t deno-portfolio .
```

Run the container:

```sh
docker run --rm -p 8000:8000 deno-portfolio
```

Then open:

```text
http://localhost:8000
```

## Quality Checks

Run TypeScript checking:

```sh
deno task check
```

Format the project:

```sh
deno task fmt
```

Lint the project:

```sh
deno task lint
```

## Customization

Most portfolio edits should happen in `src/data.ts`. Update the exported site
information, skill groups, projects, and workflow steps without touching server
or layout code.

Use `src/layout.ts` when changing page structure, adding sections, or adjusting
rendered markup. Use `src/styles.css` for all visual changes.

## Deployment Notes

This project is suitable for Deno Deploy, containers, or any host that can run a
Deno process. The server reads `PORT` from the environment and falls back to
`8000` for local development.
