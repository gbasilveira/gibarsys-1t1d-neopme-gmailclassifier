# 1. Overview

**Problem**  
Teams drown in unstructured email; built-in Gmail categories are rigid.

**Solution**  
- Custom labels driven by a *graph-based rules engine*  
- One-click "Classify" button or bulk processing over a Gmail search  
- n8n workflow orchestrates NER → RAG → Label update

**Key Tech**  
| Layer | Tech | Why |
|-------|------|-----|
| Add-on UI | Google Apps Script CardService | Native Gmail sidebar |
| Orchestration | n8n | Visual, self-hostable, OAuth helpers |
| Storage | Postgres + pgvector | ACID + semantic search |
| AI | OpenAI / Claude via n8n | LLM agent & embeddings |

See [Architecture](02_architecture.md) for sequence diagrams.