# Gmail Graph-Classifier Add-on

An AI-powered Gmail add-on that classifies email threads into **custom labels**  
based on a knowledge-graph of People, Projects, Topics and Companies.  
It uses **n8n** workflows, **Postgres + pgvector** for embeddings, and an **LLM agent** for
natural-language rule authoring and RAG-based classification.

<div align="center">
<img src="docs/img/pipeline.png" width="600" alt="High-level pipeline diagram"/>
</div>

## Quick Start

```bash
git clone [https://github.com/your-org/gmail-graph-classifier.git](https://github.com/gbasilveira/gibarsys-1t1d-neopme-gmailclassifier.git)
cd gmail-graph-classifier
# follow docs/06_setup_local_dev.md
```

| Area                 | Read first                                                    |
| -------------------- | ------------------------------------------------------------- |
| What the add-on does | [Overview](docs/01_overview.md)                               |
| How components talk  | [Architecture](docs/02_architecture.md)                       |
| Graph schema & SQL   | [Data Model](docs/03_data_model.md)                           |
| Runtime flow         | [Classification Workflow](docs/04_classification_workflow.md) |
| Writing NL rules     | [Rules Authoring](docs/05_rules_authoring.md)                 |
| Dev env              | [Local Setup](docs/06_setup_local_dev.md)                     |
| Ship to prod         | [Deployment Guide](docs/07_deployment_guide.md)               |
| GDPR & SOC-2         | [Security & Privacy](docs/08_security_privacy.md)             |
| Chat UI details      | [Chat-First UI](docs/10_chat_ui.md)                           |
| UI/UX standards      | [Design Guidelines](docs/11_ui_ux_guidelines.md)              |
| Coding standards     | [Development Practices](docs/12_coding_practices.md)          |
| Troubleshooting      | [FAQ](docs/09_faq.md)                                         |

---

### Contributing

1. **Fork** → create feature branch → **PR** to `main`.
2. Code style: `eslint --fix` for Apps Script, `black` for Python nodes.
3. All new n8n workflows need a unit test in `/tests`.

---

### License

MIT © 2025 Your Company

