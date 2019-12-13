# Cloudflare Workers

- https://workers.cloudflare.com/
- https://developers.cloudflare.com/workers/

---

- Sign up
- Skip adding site
- Go to the dashboard
- Select Free plan
- Verify email
- Set up `tomashubelbauer.workers.dev`
- Continue with Free
- Create a Worker
- Rename to `test`
- Wait for SSL errors to clear
- Visit https://test.tomashubelbauer.workers.dev

---

- `npm install -g @cloudflare/wrangler`
- https://dash.cloudflare.com/profile/api-tokens
- Create token
- Name: `worker-token`
- Template: *Edit Workers*
- Include all accounts and all zones
- Enter token to Wrangler
- `C:\Users\TomasHubelbauer\.wrangler\config\default.toml`

---

- `wrangler generate test https://github.com/cloudflare/worker-template`
