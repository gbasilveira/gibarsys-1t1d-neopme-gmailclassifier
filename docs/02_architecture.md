# 2. Architecture

```mermaid
sequenceDiagram
    participant User
    participant Chat as Chat Assistant
    participant Addon
    participant n8n
    participant PG as Postgres
    participant LLM
    participant Gmail

    User->>Addon: Click "Classify"
    Addon->>n8n: threadId + token
    n8n->>Gmail: fetch thread
    n8n->>PG: query graph (RAG)
    n8n->>LLM: prompt with rules + email
    LLM->>n8n: matching labelIds
    n8n->>Gmail: apply labels
    Gmail-->>User: Label chips updated
```

### Component Responsibilities

* **Add-on (Apps Script)**
  – Contextual card, sidebar, OAuth flow

* **Chat Assistant (LLM)**  
  – Lives inside the add-on sidebar  
  – Transforms user utterances into graph mutations or on-demand queries  

* **n8n workflow**
  – HTTP trigger, Gmail nodes, PG nodes, error-handling, retry

* **LLM agent**
  – Converts NL rules → edges, evaluates classification

Detailed node list and env-vars live in `/n8n/export.json`.