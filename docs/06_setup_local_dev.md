# 6. Local Development Setup

```bash
# 1. Clone & install
brew install postgres
brew install n8n
npm install -g clasp

# 2. Postgres
createdb graph_classifier
psql graph_classifier -f db/schema.sql

# 3. n8n
n8n start --tunnel
# import workflows from n8n/export.json

# 4. Apps Script
cd apps-script
npm install
clasp login --creds creds.json
clasp push
```

Set env-vars in `.env`:

```
OPENAI_API_KEY=
GMAIL_CLIENT_ID=
GMAIL_CLIENT_SECRET=
DATABASE_URL=postgres://...
```