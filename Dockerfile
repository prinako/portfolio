FROM denoland/deno:2.1.4

WORKDIR /app

COPY deno.json main.ts ./
COPY src ./src

ENV PORT=8000
EXPOSE 8000

USER deno

CMD ["deno", "task", "start"]
