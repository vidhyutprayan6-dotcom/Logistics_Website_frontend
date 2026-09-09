# Frontend deployment (Vercel)

## Environment variable

| Variable | Local | Production |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | `http://localhost:4000` | Your Render backend URL, e.g. `https://vettore-api.onrender.com` |

## Vercel settings

- Root Directory: leave as repo root (this is the frontend repo)
- Framework: Next.js
- After changing `NEXT_PUBLIC_API_BASE_URL`, redeploy

## Connect to backend

1. Deploy backend on Render first
2. Set `NEXT_PUBLIC_API_BASE_URL` to the Render URL
3. Deploy this frontend on Vercel
4. Tell backend to allow your Vercel URL via `FRONTEND_URL` / `CORS_ORIGINS`
