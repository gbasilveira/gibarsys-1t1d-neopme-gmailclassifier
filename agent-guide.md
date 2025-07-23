# LLM Agent Guide

## Project Context
**Gmail Graph-Classifier Add-on**: AI-powered email classification system using knowledge graphs of People, Projects, Topics, and Companies. Tech stack: n8n workflows, PostgreSQL+pgvector, Gmail API, LLM integration, Google Apps Script UI.

## Navigation
- **Start here**: [README.md](README.md) contains complete project overview and documentation navigation
- **Architecture tasks**: Follow links to `/docs/architecture/`  
- **Design/UI tasks**: Follow links to `/docs/design/`
- **Implementation tasks**: Follow links to `/docs/implementation/`
- **Detailed navigation rules**: See [`/docs/reference/navigation-guidelines.md`](docs/reference/navigation-guidelines.md)

## Critical Development Constraints
- **Testing**: 100% TDD coverage required - write tests first, then implementation
- **UI Framework**: Vanilla Fluent UI 2.0 only - no custom CSS or components
- **File Size**: Absolutely modular - split by components/features, avoid large files
- **Git Workflow**: Follow commit/PR standards in [`/docs/implementation/git-workflow.md`](docs/implementation/git-workflow.md)

## Documentation Update Rules
- **Always update** related documentation when making code changes
- **Maintain navigation links** when creating new documents (use patterns from existing docs)
- **Create new docs** for new features/modules; **update existing docs** for modifications
- **Follow established format**: Every doc needs "← Back to" links and "Related Documentation" section

## Error Handling
- **Broken links**: Check if referenced doc exists; create minimal boilerplate if missing
- **Missing docs**: Create placeholder with proper navigation and "TBD during development" content
- **Documentation conflicts**: Always ask user for clarification before proceeding

## Essential Rules
1. Read [README.md](README.md) first for project context and navigation
2. Write tests first (TDD) - 100% coverage required
3. Use only vanilla Fluent UI components for UI work
4. Keep files small and modular - split by features/components
5. Always update documentation alongside code changes
6. Follow Git workflow standards for commits and PRs
7. Ask for user approval when documentation is missing or unclear