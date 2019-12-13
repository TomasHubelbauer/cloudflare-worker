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
- Set `account_id` in `wrangler.toml`
- `cd test`
- `wrangler preview`
- Change the worker and retry - it shows up!
- https://developers.cloudflare.com/workers/quickstart/#directing-requests
- `wrangler preview --watch`
- `wrangler publish`
- Wait for the cache to clear
- https://test.tomashubelbauer.workers.dev
- 10k requests daily for free!

---

Worker works, now for storage:
https://developers.cloudflare.com/workers/reference/storage/overview

- Buy the unlimited plan ($5 USD and also bumps worker limits)
- Go to the dashboard, Workers and KV
- Create a new namespace, `test`
- Extend `wrangler.toml`:

```toml
kv-namespaces = [
  { binding = "kv", id = "" }
]
```

Now the namespace is available under the variable name `kv` in the code.

---

GitHub Actions:

Add the token from https://dash.cloudflare.com/profile/api-tokens to a secret
named `CF_API_TOKEN`.

Then use this workflow file:

```yml
name: worker
on:
  push:
    branches:
    # Limit to the `master` branch
    - master
jobs:
  worker:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Run Wrangler
      env:
        CF_API_TOKEN: ${{secrets.CF_API_TOKEN}}
      run: |
        npx @cloudflare/wrangler publish
```

That's it! Any changes to the repo will now replace the worker.

## Secret Storage

There is supposed to be a Secrets Vault service in the future, but for now KV is
the way to go. The worker code is also a possibility, it is not reachable from
the outside of Cloudflare.
