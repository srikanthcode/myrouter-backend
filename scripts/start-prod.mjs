/**
 * Production launcher for ProRouter Backend API Gateway.
 * Render/Railway/Koyeb provides $PORT for the public listener.
 */
import { fork } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const port = process.env.PORT || process.env.API_PORT || "10000";
console.log(`[prorouter-backend] Starting API on port ${port} with 384MB memory cap...`);

const here = path.dirname(fileURLToPath(import.meta.url));
const serverFile = path.resolve(here, "../apps/api/src/server.ts");
const tsxCli = path.resolve(here, "../node_modules/tsx/dist/cli.mjs");

const child = fork(tsxCli, [serverFile], {
  execArgv: ["--max-old-space-size=384"],
  env: {
    ...process.env,
    PORT: String(port),
    API_PORT: String(port),
  },
});

child.on("exit", (code) => {
  console.log(`[prorouter-backend] API exited with code ${code}`);
  process.exit(code ?? 0);
});

process.on("SIGTERM", () => {
  if (!child.killed) child.kill("SIGTERM");
  process.exit(0);
});

process.on("SIGINT", () => {
  if (!child.killed) child.kill("SIGINT");
  process.exit(0);
});
