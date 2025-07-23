# Git Workflow & Standards

[← Back to Main README](../../README.md) | [← Back to Implementation](coding-standards.md)

## Overview

This document defines Git workflow, commit standards, and pull request procedures for the Gmail Graph-Classifier Add-on project.

## Branch Strategy

### Branch Naming
- **Feature branches**: `feature/component-name` or `feature/feature-description`
- **Bug fixes**: `fix/issue-description` or `fix/component-bug`
- **Documentation**: `docs/section-update` or `docs/new-documentation`
- **Refactoring**: `refactor/component-name` or `refactor/architecture-update`

### Branch Workflow
1. Create feature branch from `main`
2. Implement changes with tests and documentation
3. Commit following standards below
4. Create pull request with detailed description
5. Code review and approval required
6. Merge to `main` after approval

## Commit Standards

### Commit Message Format
```
type(scope): brief description

Detailed explanation of changes including:
- What was changed and why
- Impact on existing functionality
- Breaking changes if any
- Related documentation updates

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Commit Types
- **feat**: New feature implementation
- **fix**: Bug fix or error correction
- **docs**: Documentation updates only
- **refactor**: Code restructuring without functionality change
- **test**: Test additions or modifications
- **style**: Code style/formatting changes
- **perf**: Performance improvements
- **build**: Build system or dependency updates

### Commit Scope Examples
- **ui**: User interface components and design
- **api**: API interfaces and contracts
- **workflow**: n8n workflow definitions
- **database**: Database schema or queries
- **auth**: Authentication and authorization
- **classification**: Email classification logic
- **graph**: Knowledge graph operations

### Commit Message Examples

#### Feature Implementation
```
feat(ui): add email classification results display

Implement classification results panel using vanilla Fluent UI components:
- Add ResultsCard component for displaying applied labels
- Include confidence indicators using ProgressIndicator
- Add action buttons for manual label correction
- Ensure full accessibility compliance with WCAG 2.1 AA

Updated documentation:
- docs/design/ui-specifications.md - added ResultsCard specs
- docs/implementation/api-contracts.md - added results interface

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

#### Bug Fix
```
fix(classification): resolve rule evaluation priority issue

Fix bug where lower-priority rules were overriding higher-priority matches:
- Correct sorting logic in RuleEvaluationService.evaluateRules()
- Add comprehensive test coverage for priority scenarios
- Update rule evaluation algorithm documentation

Breaking changes: None
Performance impact: ~5ms improvement in evaluation time

Updated tests:
- RuleEvaluationService.test.ts - added priority test cases
- Added integration tests for complex rule scenarios

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

#### Documentation Update
```
docs(architecture): update system design with new integration patterns

Expand system design documentation to include:
- LLM service integration patterns and error handling
- Database connection pooling and retry mechanisms
- Gmail API rate limiting and backoff strategies
- Service authentication flow diagrams

Added new sections:
- docs/architecture/system-design.md - integration patterns
- docs/architecture/integration-patterns.md - error handling

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Pull Request Standards

### PR Title Format
```
[Type] Brief description of changes
```

Examples:
- `[Feature] Add email classification results display`
- `[Fix] Resolve rule evaluation priority issue`
- `[Docs] Update architecture documentation`

### PR Description Template
```markdown
## Summary
Brief description of changes and their purpose.

## Changes Made
- [ ] Feature/fix implementation
- [ ] Tests added/updated (100% coverage maintained)
- [ ] Documentation updated
- [ ] Navigation links maintained

## Testing
- [ ] All existing tests pass
- [ ] New tests added for new functionality
- [ ] Integration tests updated if needed
- [ ] Manual testing completed

## Documentation Updates
- [ ] Code documentation updated
- [ ] Related .md files updated
- [ ] Navigation links verified
- [ ] Cross-references maintained

## Fluent UI Compliance
- [ ] Only vanilla Fluent UI components used
- [ ] No custom CSS or styling
- [ ] Standard Fluent UI patterns followed
- [ ] Accessibility requirements met

## Breaking Changes
- [ ] No breaking changes
- [ ] Breaking changes documented with migration guide

## Review Checklist
- [ ] Code follows project standards
- [ ] Tests provide 100% coverage
- [ ] Documentation is complete and accurate
- [ ] No merge conflicts
- [ ] Ready for review
```

### PR Review Requirements
- **Mandatory Reviews**: At least one approval required
- **Automated Checks**: All CI/CD checks must pass
- **Documentation**: All related docs must be updated
- **Testing**: 100% test coverage maintained
- **Fluent UI**: Only vanilla components verified

## Quality Gates

### Pre-Commit Requirements
- All tests passing with 100% coverage
- Documentation updated for any changes
- Lint and formatting checks passed
- No merge conflicts with target branch

### Merge Requirements
- PR approved by at least one reviewer
- All automated checks passing
- Documentation review completed
- No unresolved conversations
- Branch up to date with target

## Automated Workflows

### Commit Hooks
- Pre-commit: Run tests, lint, format check
- Commit-msg: Validate commit message format
- Pre-push: Ensure all tests pass

### CI/CD Pipeline
- Automated testing on all commits
- Documentation building and validation
- Code quality and security scanning
- Performance regression testing

## Related Documentation

- [Coding Standards](coding-standards.md)
- [Testing Strategy](testing-strategy.md)
- [Navigation Guidelines](../reference/navigation-guidelines.md)