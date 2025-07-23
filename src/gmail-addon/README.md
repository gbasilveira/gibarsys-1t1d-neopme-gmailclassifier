# Gmail Graph-Classifier Add-on

[← Back to Main README](../../README.md)

## Overview

The Gmail Graph-Classifier Add-on provides the user interface and Gmail integration for the AI-powered email classification system. Built with Google Apps Script, it follows Fluent UI 2.0 design principles and integrates seamlessly with Gmail's native interface.

## Architecture

### Core Components

- **`main.js`** - Main entry points and trigger functions for Gmail addon
- **`ui-components.js`** - Reusable UI components following Fluent UI patterns
- **`appsscript.json`** - Google Apps Script manifest and configuration

### UI Framework

- **Framework**: Google Apps Script CardService (mimicking Fluent UI 2.0 patterns)
- **Design System**: Microsoft Fluent UI design tokens and patterns
- **Styling**: No custom CSS - uses native CardService styling only
- **Components**: Vanilla Fluent UI component patterns adapted for CardService

## Features

### Current Implementation

- ✅ Gmail message contextual triggers
- ✅ Compose mode classification actions
- ✅ Placeholder card for initial display
- ✅ Error handling with user-friendly messages
- ✅ Loading states for async operations
- ✅ Action buttons for user interactions

### Planned Features

- 🔄 Integration with n8n classification workflows
- 🔄 Real-time email content analysis
- 🔄 Automatic label application
- 🔄 Classification confidence scoring
- 🔄 User feedback and learning mechanisms

## Development Setup

### Prerequisites

- Node.js 18+ and npm
- Google Apps Script CLI (`@google/clasp`)
- Gmail account with Apps Script access

### Installation

```bash
# Install dependencies
npm install

# Install Google Apps Script CLI globally
npm install -g @google/clasp

# Login to Google account
clasp login

# Create new Apps Script project
clasp create --type standalone --title "Gmail Graph-Classifier"
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Deployment

```bash
# Push code to Google Apps Script
npm run deploy

# Push and watch for changes
npm run deploy:watch
```

## Testing Strategy

### Test-Driven Development

Following TDD principles with 100% test coverage requirement:

1. **Unit Tests** - Individual function testing with mocked dependencies
2. **Integration Tests** - Component interaction testing
3. **UI Tests** - CardService UI component testing
4. **Error Handling Tests** - Comprehensive error scenario coverage

### Test Structure

```
tests/
├── gmail-addon/
│   ├── main.test.js           # Main function tests
│   ├── ui-components.test.js  # UI component tests
│   └── integration.test.js    # Integration tests
└── setup.js                  # Jest test configuration
```

## UI Design Patterns

### Fluent UI Compliance

All UI components follow Microsoft Fluent UI 2.0 design principles:

- **Typography**: Consistent text hierarchy and styling
- **Spacing**: Standard Fluent UI spacing tokens
- **Colors**: Default CardService color scheme (Fluent UI compatible)
- **Components**: Standard card, section, button, and text patterns
- **Interactions**: Consistent action patterns and feedback

### Component Structure

```javascript
// Standard card structure
CardService.newCardBuilder()
  .setHeader(CardService.newCardHeader()
    .setTitle('Title')
    .setSubtitle('Subtitle'))
  .addSection(CardService.newCardSection()
    .addWidget(CardService.newTextParagraph()
      .setText('Content')))
  .build();
```

## API Integration

### Gmail API Integration

- **Scopes**: Read, modify, and label management permissions
- **Services**: Gmail advanced service for message access
- **Authentication**: OAuth 2.0 through Google Apps Script

### External Service Integration

- **n8n Workflows**: HTTP requests to classification endpoints
- **Error Handling**: Graceful degradation for service unavailability
- **Rate Limiting**: Built-in Google Apps Script rate limiting

## Configuration

### Manifest Configuration

The `appsscript.json` file configures:

- Gmail addon triggers and permissions
- OAuth scopes for Gmail access
- Advanced services and dependencies
- Contextual and compose triggers

### Environment Variables

Configuration through Google Apps Script properties:

```javascript
// Example configuration access
const config = {
  n8nEndpoint: PropertiesService.getScriptProperties().getProperty('N8N_ENDPOINT'),
  apiKey: PropertiesService.getScriptProperties().getProperty('API_KEY')
};
```

## Troubleshooting

### Common Issues

1. **Permission Errors**: Ensure all OAuth scopes are approved
2. **Trigger Failures**: Check Gmail addon manifest configuration
3. **UI Rendering Issues**: Verify CardService component structure
4. **API Timeouts**: Implement proper error handling and retries

### Debug Mode

Enable debug logging:

```javascript
// Add to any function for debugging
console.log('Debug info:', JSON.stringify(data, null, 2));
```

## Related Documentation

- [UI Specifications](../../docs/design/ui-specifications.md)
- [System Architecture](../../docs/architecture/system-design.md)
- [Testing Strategy](../../docs/implementation/testing-strategy.md)
- [API Contracts](../../docs/implementation/api-contracts.md)

---

**Note**: This addon is part of the larger Gmail Graph-Classifier system. See the [main README](../../README.md) for complete system documentation and architecture overview.