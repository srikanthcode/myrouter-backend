/**
 * Production launcher for ProRouter Backend API Gateway.
 * Render/Railway/Koyeb provides $PORT for the public listener.
 */
import { spawn } from "node:child_process";

const port = process.env.PORT || process.env.API_PORT || "4000";
console.log(`[prorouter-backend] Starting API on port ${port}...`);

const child = spawn("npm", ["run", "start", "-w", "@pro/api"], {
  stdio: "inherit",
  shell: true,
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
