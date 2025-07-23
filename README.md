# Gmail Graph-Classifier Add-on

## Technical Overview

The Gmail Graph-Classifier Add-on is an AI-powered email classification system that automatically categorizes Gmail threads using custom labels based on a knowledge graph of People, Projects, Topics, and Companies. The system combines natural language processing, graph-based reasoning, and large language model capabilities to provide intelligent email organization.

**Business Value**: Reduces email management overhead by automatically applying contextually relevant labels, enabling users to focus on high-priority communications and maintain organized inboxes without manual categorization.

**Technical Architecture**: Built on n8n workflow orchestration, PostgreSQL with pgvector for semantic search, and LLM integration for natural language rule authoring and classification decisions. The system operates as a Gmail Add-on using Google Apps Script for user interface and Google Workspace APIs for email access.

## Project Architecture

The system follows a layered architecture with clear separation of concerns:

- **Presentation Layer**: Gmail Add-on interface built with Google Apps Script
- **Orchestration Layer**: n8n workflows managing classification processes
- **Domain Layer**: Core business logic for rule evaluation and classification
- **Data Layer**: PostgreSQL with pgvector for graph storage and semantic search
- **Integration Layer**: LLM APIs for natural language processing and decision making

## Documentation Navigation

### Architecture Guidelines
- [`/docs/architecture/system-design.md`](docs/architecture/system-design.md) - Core system architecture and component relationships
- [`/docs/architecture/data-flow.md`](docs/architecture/data-flow.md) - Data processing workflows and information flow
- [`/docs/architecture/integration-patterns.md`](docs/architecture/integration-patterns.md) - External system integrations and API contracts

### Design Guidelines
- [`/docs/design/ui-specifications.md`](docs/design/ui-specifications.md) - UI component specifications and interface standards
- [`/docs/design/ux-workflows.md`](docs/design/ux-workflows.md) - User experience workflows and interaction patterns
- [`/docs/design/design-system.md`](docs/design/design-system.md) - Visual design standards and component library

### Implementation Guidelines
- [`/docs/implementation/coding-standards.md`](docs/implementation/coding-standards.md) - Development practices and code quality standards
- [`/docs/implementation/testing-strategy.md`](docs/implementation/testing-strategy.md) - Testing approaches and quality assurance
- [`/docs/implementation/api-contracts.md`](docs/implementation/api-contracts.md) - Interface definitions and service contracts

## Source Code Navigation

*Note: Source code directories will be established during development phase*

### Core Components
- `/src/` - Main source code directory (to be created)
- `/tests/` - Test suites and quality assurance (to be created)
- `/docs/` - Project documentation and guidelines

### Key Modules
- Domain logic and business rules (location TBD)
- Gmail integration and user interface (location TBD)
- n8n workflow definitions (location TBD)
- Database schema and migrations (location TBD)

## Related Documentation

### Development Setup
- [`/docs/setup/local-development.md`](docs/setup/local-development.md) - Local environment setup and configuration
- [`/docs/setup/dependencies.md`](docs/setup/dependencies.md) - Required dependencies and installation

### Operations
- [`/docs/deployment/production-setup.md`](docs/deployment/production-setup.md) - Production deployment procedures
- [`/docs/deployment/monitoring.md`](docs/deployment/monitoring.md) - System monitoring and observability

### Reference
- [`/docs/reference/navigation-guidelines.md`](docs/reference/navigation-guidelines.md) - Documentation navigation and cross-reference standards
- [`/docs/reference/glossary.md`](docs/reference/glossary.md) - Technical terminology and definitions

---

**Documentation Standards**: All documentation files include bidirectional navigation links and cross-references to related sections. See [`/docs/reference/navigation-guidelines.md`](docs/reference/navigation-guidelines.md) for complete navigation standards.