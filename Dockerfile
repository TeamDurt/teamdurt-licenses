FROM oven/bun:1

WORKDIR /app

COPY package.json package.json
RUN bun install

COPY . .

EXPOSE 3000
ENTRYPOINT ["bun", "run", "./src/index.ts"]