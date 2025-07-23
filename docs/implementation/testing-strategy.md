# Testing Strategy

[← Back to Main README](../../README.md) | [← Back to Implementation](coding-standards.md)

## Overview

This document outlines testing approaches and quality assurance practices for the Gmail Graph-Classifier Add-on.

## Testing Framework

### Testing Levels
- Unit testing for individual components and functions
- Integration testing for component interactions
- End-to-end testing for complete user workflows
- Performance testing for system scalability

### Quality Requirements
- Comprehensive test coverage for all code paths
- Automated testing integration with development workflow
- Continuous quality monitoring and reporting
- Test-driven development practices

## Testing Patterns

### Component Testing
- Vanilla Fluent UI component behavior validation
- Integration testing with Gmail APIs
- n8n workflow testing and validation
- Database integration testing

### System Testing
- Email classification accuracy testing
- Rule evaluation and validation testing
- Performance and scalability testing
- Security and privacy compliance testing

## Testing Implementation

### Gmail Add-on Testing Framework

#### Test Structure
- **Framework**: Jest with Node.js test environment
- **Mocking**: Google Apps Script services (CardService, GmailApp)
- **Coverage**: 100% requirement for branches, functions, lines, and statements
- **Location**: `/tests/gmail-addon/` with parallel structure to source

#### Test Categories

##### Unit Tests (`main.test.js`)
- **onGmailMessage()**: Message trigger function testing
- **onComposeClassify()**: Compose trigger function testing
- **buildClassificationCard()**: Card building logic testing
- **Error Handling**: Exception scenarios and graceful degradation

##### UI Component Tests (`ui-components.test.js`)
- **createClassificationCard()**: Classification display testing
- **createPlaceholderCard()**: Welcome screen testing
- **createErrorCard()**: Error handling UI testing
- **createLoadingCard()**: Loading state testing

##### Integration Tests (Planned)
- End-to-end workflow testing
- Gmail API integration testing
- n8n service integration testing

#### Mock Configuration
- **CardService**: Complete CardService API mocking with chainable methods
- **GmailApp**: Gmail service mocking for message and thread access
- **Console**: Logging service mocking for debug output
- **Setup**: Global test setup in `/tests/setup.js`

#### Test Execution
```bash
npm test           # Run all tests
npm run test:watch # Watch mode for development
npm run test:coverage # Generate coverage reports
```

## Related Documentation

- [Coding Standards](coding-standards.md)
- [API Contracts](api-contracts.md)
- [System Design](../architecture/system-design.md)