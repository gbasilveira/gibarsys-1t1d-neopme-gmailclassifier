# Coding Standards

[← Back to Main README](../../README.md)

## Overview

This document defines development practices and code quality standards for the Gmail Graph-Classifier Add-on, emphasizing vanilla Fluent UI usage and NLP-friendly code organization.

## UI/UX Implementation Standards

### Fluent UI Requirements
- **Framework**: Microsoft Fluent UI 2.0 exclusively
- **Custom CSS**: Strictly prohibited - use Fluent UI design tokens only
- **Custom Components**: Prohibited - use official Fluent UI component library only
- **Theme**: Standard Fluent UI theme without modifications
- **Styling**: Fluent UI utilities and design tokens exclusively

### Implementation Constraints
- All UI components must be vanilla Fluent UI components
- No CSS overrides or custom styling permitted
- Component composition using official library only
- Consistent with Microsoft 365 design patterns

## Code Organization

### File Structure
- Modular architecture with clear separation of concerns
- NLP-friendly file naming and organization
- Maximum file size limits for optimal context management
- Clear directory structure for AI navigation

### Development Practices
- Test-driven development approach
- Comprehensive documentation for all public APIs
- Type safety and strict TypeScript usage
- Code quality enforcement through automated tools

## Quality Standards

### Test-Driven Development
- **Coverage Requirement**: 100% test coverage for all code paths
- **Testing Framework**: Jest with Google Apps Script mocking
- **Test Structure**: Unit, integration, and UI component tests
- **Test Location**: `/tests/` directory with parallel structure to `/src/`

### Google Apps Script Standards
- **Manifest Configuration**: Proper OAuth scopes and trigger definitions
- **Error Handling**: Graceful degradation with user-friendly error messages
- **Performance**: Efficient CardService usage and minimal API calls
- **Documentation**: JSDoc comments for all functions and modules

### Code Quality Enforcement
- **Linting**: ESLint with recommended rules and custom configurations
- **Type Safety**: JSDoc type annotations for better IDE support
- **Modular Design**: Small, focused files with clear separation of concerns
- **Version Control**: Structured commits following established Git workflow

## Related Documentation

- [Testing Strategy](testing-strategy.md)
- [API Contracts](api-contracts.md)
- [Design System](../design/design-system.md)