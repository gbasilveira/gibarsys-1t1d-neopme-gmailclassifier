# 7. Deployment Guide

| Target | Tooling | Notes |
|--------|---------|-------|
| **Postgres** | Fly.io or RDS | Enable `pgvector` extension |
| **n8n** | Docker on ECS | Set `N8N_BASIC_AUTH_*` |
| **Apps Script** | Workspace Marketplace | Submit OAuth verification early |
| **LLM Endpoint** | OpenAI or Vertex AI | Consider dedicated model for EU data |

**CI/CD** uses GitHub Actions → Terraform Cloud.  
See `.github/workflows/deploy.yml`.