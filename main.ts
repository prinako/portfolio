import { renderHomePage } from "./src/layout.ts";
import {
  DEFAULT_LANGUAGE,
  getPageData,
  type LanguageCode,
  pageDataByLanguage,
} from "./src/data/index.ts";

const DEFAULT_PORT = 8000;
const STYLE_PATHS = new Map<string, URL>([
  ["/styles.css", new URL("./src/styles/en-us.css", import.meta.url)],
  ["/styles.en-us.css", new URL("./src/styles/en-us.css", import.meta.url)],
  ["/styles.pt-br.css", new URL("./src/styles/pt-br.css", import.meta.url)],
  ["/styles.base.css", new URL("./src/styles/base.css", import.meta.url)],
]);

const textHeaders = {
  "content-type": "text/html; charset=utf-8",
  "x-content-type-options": "nosniff",
};

function jsonResponse(data: unknown, init: ResponseInit = {}): Response {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "x-content-type-options": "nosniff",
      ...init.headers,
    },
  });
}

async function resolvePort(): Promise<number> {
  const envPermission = await Deno.permissions.query({
    name: "env",
    variable: "PORT",
  });

  if (envPermission.state !== "granted") {
    return DEFAULT_PORT;
  }

  const port = Number(Deno.env.get("PORT"));
  return Number.isInteger(port) && port > 0 ? port : DEFAULT_PORT;
}

function resolveLanguage(pathname: string): LanguageCode | undefined {
  if (pathname === "/") {
    return DEFAULT_LANGUAGE;
  }

  const language = pathname.slice(1);

  return language in pageDataByLanguage ? language as LanguageCode : undefined;
}

async function serveStyles(pathname: string): Promise<Response> {
  const stylePath = STYLE_PATHS.get(pathname);

  if (!stylePath) {
    return new Response("Stylesheet not found", { status: 404 });
  }

  try {
    const css = await Deno.readTextFile(stylePath);

    return new Response(css, {
      headers: {
        "content-type": "text/css; charset=utf-8",
        "cache-control": "public, max-age=3600",
        "x-content-type-options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Unable to load stylesheet:", error);
    return new Response("Stylesheet unavailable", { status: 500 });
  }
}

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { allow: "GET, HEAD" },
    });
  }

  const language = resolveLanguage(url.pathname);

  if (language) {
    return new Response(
      request.method === "HEAD" ? null : renderHomePage(getPageData(language)),
      {
        headers: textHeaders,
      },
    );
  }

  if (STYLE_PATHS.has(url.pathname)) {
    return request.method === "HEAD"
      ? new Response(null, {
        headers: {
          "content-type": "text/css; charset=utf-8",
          "cache-control": "public, max-age=3600",
        },
      })
      : await serveStyles(url.pathname);
  }

  if (url.pathname === "/health") {
    return jsonResponse({
      status: "ok",
      service: "portfolio",
      timestamp: new Date().toISOString(),
    });
  }

  return new Response("Not found", { status: 404 });
}

if (import.meta.main) {
  const PORT = await resolvePort();
  Deno.serve({ port: PORT }, handleRequest);
}
