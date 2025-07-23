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

*Detailed coding standards, testing requirements, and quality assurance practices will be defined during development.*

## Related Documentation

- [Testing Strategy](testing-strategy.md)
- [API Contracts](api-contracts.md)
- [Design System](../design/design-system.md)