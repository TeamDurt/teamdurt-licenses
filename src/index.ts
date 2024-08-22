const BASE_PATH = "./licenses";

Bun.serve({
    port: 3000,
    async fetch(req) {
        const { pathname } = new URL(req.url);

        if (pathname === "/") {
            return new Response("Retrieve the latest version of the license at /latest or the version you need at /{version}");
        }

        const filePath = BASE_PATH + pathname;
        const file = Bun.file(filePath);
        return new Response(file);
    },
    error() {
        return new Response("Not Found", { status: 404 });
    },
});