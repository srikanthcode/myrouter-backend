import esbuild from "esbuild";

console.log("[build] Bundling API Gateway with esbuild...");
await esbuild.build({
  entryPoints: ["apps/api/src/server.ts"],
  bundle: true,
  platform: "node",
  target: "node20",
  format: "esm",
  outfile: "dist/server.mjs",
  external: [
    "@electric-sql/pglite",
    "@fastify/cookie",
    "@fastify/cors",
    "fastify",
    "pg",
    "mongodb",
    "drizzle-orm",
    "zod",
  ],
});
console.log("[build] Built dist/server.mjs successfully!");
