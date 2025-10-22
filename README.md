
# E‑Learning Consulting Landingpage (Next.js on Netlify)

## Quick deploy (GitHub → Netlify)
1. Create a new GitHub repo and push this folder.
2. In Netlify: **Add new site → Import from Git** → choose your repo.
3. Build settings:  
   - **Build command:** `npm run build`  
   - **Publish directory:** `.next`  
   - **Environment:** Node 18+
4. Netlify auto-detects Next.js and installs `@netlify/plugin-nextjs` (also in `netlify.toml`).  
5. After first deploy, connect your custom domain in **Site settings → Domains**.

## Local dev
```bash
npm install
npm run dev
# open http://localhost:3000
```
