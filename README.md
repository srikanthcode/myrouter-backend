# ProRouter Backend API Gateway

High-performance AI Router and OpenAI-compatible API Gateway built with Fastify, TypeScript, and intelligent stealth model impersonation.

## Features
- **OpenAI Compatible**: Drop-in replacement for `https://api.openai.com/v1/chat/completions` and `https://api.openai.com/v1/models`.
- **Stealth AI Persona Engine**: Routes all 21+ models (Kimi K3, Claude Sonnet, Claude Opus, Gemini Pro, Grok, Qwen, GLM, Devstral, GPT-6.1) with authentic persona enforcement and zero upstream leakage.
- **Ultra-Low Latency**: Fastify architecture responding in ~1.7–2s.
- **Embedded Database**: PGlite / PostgreSQL / MongoDB support.
- **Streaming & Non-Streaming**: SSE streaming with reasoning token support (`delta.reasoning_content`).

## Deploying on Render (Free 24/7)

1. Create a **New Web Service** on [Render](https://render.com).
2. Connect this repository (`srikanthcode/myrouter-backend`).
3. Set:
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
4. Add Environment Variables:
   ```env
   NODE_ENV=production
   AUTH_SECRET=your-random-secret-key-32-chars
   ENCRYPTION_KEY=your-random-encryption-key-32-chars
   PROVIDER_PROROUTER_GATEWAY_API_KEY=tj_m0sow5S81J10HmZLkIC-lPXWmIl8ojnREQ9Mo_Xd3ts
   PROVIDER_PROROUTER_GATEWAY_BASE_URL=https://api.tokenjuice.ai/v1
   ```
5. **Keep 24/7 Awake with UptimeRobot (Zero 50s Cold Start delay):**
   - Go to [UptimeRobot.com](https://uptimerobot.com) (100% Free).
   - Add a monitor pinging `https://your-service.onrender.com/health` every 5 minutes.
   - Render stays awake 24/7 and responds in under 2 seconds!

## Running Locally

```bash
# Install dependencies
npm install

# Run database migrations and seed
npm run db:migrate
npm run db:seed

# Start development server
npm run dev
```

The API will listen on `http://localhost:4000`.

## Endpoints
- `GET /health` - Health check
- `POST /v1/chat/completions` - OpenAI-compatible Chat Completions
- `GET /v1/models` - List available models
