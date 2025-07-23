# Gmail Graph-Classifier Add-on - Deployment Guide

[← Back to Main README](README.md)

## Overview

This guide provides step-by-step instructions for deploying the Gmail Graph-Classifier Add-on to Google Apps Script and configuring it for use in Gmail.

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18+ installed
- ✅ Google account with Gmail access
- ✅ Google Apps Script API enabled
- ✅ All tests passing (`npm test`)
- ✅ Code quality checks passing (`npm run lint`)

## Deployment Steps

### 1. Install Dependencies

```bash
# Install project dependencies
npm install

# Install Google Apps Script CLI globally
npm install -g @google/clasp
```

### 2. Authenticate with Google

```bash
# Login to your Google account
clasp login

# Enable Apps Script API (if not already enabled)
# Visit: https://script.google.com/home/usersettings
```

### 3. Create Apps Script Project

```bash
# Create new standalone Apps Script project
clasp create --type standalone --title "Gmail Graph-Classifier"

# This will update .clasp.json with your project's scriptId
```

### 4. Deploy to Google Apps Script

```bash
# Push code to Google Apps Script
npm run deploy

# Or use clasp directly
clasp push
```

### 5. Configure Gmail Add-on

1. **Open Google Apps Script Console**
   - Visit [script.google.com](https://script.google.com)
   - Open your "Gmail Graph-Classifier" project

2. **Review Manifest Configuration**
   - Verify `appsscript.json` contains correct OAuth scopes
   - Ensure Gmail add-on configuration is properly set

3. **Test the Add-on**
   - Click "Deploy" → "Test deployments"
   - Install the add-on for testing
   - Open Gmail and verify the add-on appears in the sidebar

### 6. Publish for Production (Optional)

1. **Create Deployment**
   ```bash
   clasp deploy --description "Initial Gmail Graph-Classifier deployment"
   ```

2. **Configure OAuth Consent Screen**
   - Visit [Google Cloud Console](https://console.cloud.google.com)
   - Navigate to "APIs & Services" → "OAuth consent screen"
   - Configure app information and scopes

3. **Submit for Review**
   - If publishing publicly, submit for Google's security review
   - For internal use, configure as "Internal" application

## Configuration

### Environment Variables

Set up configuration through Google Apps Script Properties:

```javascript
// In Apps Script console, run this once:
function setupConfiguration() {
  const properties = PropertiesService.getScriptProperties();
  
  properties.setProperties({
    'N8N_ENDPOINT': 'https://your-n8n-instance.com/webhook/gmail-classifier',
    'API_KEY': 'your-api-key-here',
    'DEBUG_MODE': 'false'
  });
}
```

### OAuth Scopes

The add-on requires these Gmail permissions:
- `https://www.googleapis.com/auth/gmail.readonly` - Read emails
- `https://www.googleapis.com/auth/gmail.modify` - Modify emails
- `https://www.googleapis.com/auth/gmail.labels` - Manage labels
- `https://www.googleapis.com/auth/script.external_request` - External API calls

## Testing

### Local Testing

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage

# Lint code quality
npm run lint
```

### Gmail Integration Testing

1. **Install Test Deployment**
   - Use "Test deployments" in Apps Script console
   - Install the add-on in your Gmail account

2. **Test Core Functionality**
   - Open Gmail and select an email
   - Verify add-on sidebar appears
   - Test classification placeholder functionality
   - Verify error handling works correctly

3. **Test Compose Integration**
   - Compose a new email
   - Click "Classify Email" action
   - Verify compose mode functionality

## Monitoring and Debugging

### Logging

View logs in Google Apps Script:
1. Open Apps Script console
2. Navigate to "Executions" tab
3. View execution logs and errors

### Debug Mode

Enable debug logging:
```javascript
// Add to any function for detailed logging
console.log('Debug info:', JSON.stringify(data, null, 2));
```

### Common Issues

1. **Permission Errors**
   - Ensure all OAuth scopes are approved
   - Check Gmail API is enabled

2. **Trigger Failures**
   - Verify manifest configuration
   - Check contextual trigger setup

3. **UI Rendering Issues**
   - Validate CardService component structure
   - Ensure proper error handling

## Rollback Procedure

If issues occur in production:

```bash
# Deploy previous version
clasp deploy --versionNumber [previous-version]

# Or rollback to specific deployment
clasp deployments
clasp undeploy [deployment-id]
```

## Security Considerations

1. **API Keys**: Store sensitive configuration in Apps Script Properties
2. **OAuth Scopes**: Request minimal required permissions
3. **Data Handling**: Follow Gmail API usage policies
4. **Error Handling**: Don't expose sensitive information in error messages

## Performance Optimization

1. **Caching**: Implement caching for repeated classification requests
2. **Rate Limiting**: Respect Gmail API quotas and limits
3. **Async Operations**: Use proper error handling for external API calls
4. **Resource Management**: Optimize CardService usage

## Support and Maintenance

### Regular Maintenance

- Monitor execution quotas and performance
- Update dependencies regularly
- Review and rotate API keys
- Monitor user feedback and error logs

### Updates and Patches

```bash
# Deploy updates
npm test && npm run lint && npm run deploy

# Tag releases
git tag -a v1.0.1 -m "Bug fixes and improvements"
git push origin v1.0.1
```

## Related Documentation

- [Gmail Add-on README](src/gmail-addon/README.md)
- [System Architecture](docs/architecture/system-design.md)
- [Testing Strategy](docs/implementation/testing-strategy.md)
- [UI Specifications](docs/design/ui-specifications.md)

---

**Note**: This deployment guide covers the Gmail add-on component only. For complete system deployment including n8n workflows and database setup, refer to the main project documentation.