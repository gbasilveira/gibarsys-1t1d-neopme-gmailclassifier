/**
 * Gmail Graph-Classifier Add-on - UI Components
 * 
 * This module provides reusable UI components following Fluent UI 2.0 design principles
 * using Google Apps Script CardService for Gmail addon interface.
 */

/**
 * Creates the main classification card with results display
 * Follows Fluent UI design patterns and component structure
 * 
 * @param {Object} data - Classification data for display
 * @param {string} data.subject - Email subject line
 * @param {string} data.classification - Single classification result
 * @param {Array} data.classifications - Multiple classification results
 * @param {number} data.confidence - Classification confidence score
 * @returns {Card} Google Apps Script Card
 */
function createClassificationCard(data) {
  const card = CardService.newCardBuilder();
  
  // Header with Fluent UI styling principles
  const header = CardService.newCardHeader()
    .setTitle('Gmail Graph-Classifier')
    .setSubtitle('AI-Powered Email Classification');
  
  card.setHeader(header);
  
  // Main content section
  const section = CardService.newCardSection();
  
  // Email subject display
  if (data.subject) {
    const subjectParagraph = CardService.newTextParagraph()
      .setText(`<b>Subject:</b> ${data.subject}`);
    section.addWidget(subjectParagraph);
  }
  
  // Single classification display
  if (data.classification) {
    const classificationParagraph = CardService.newTextParagraph()
      .setText(`<b>Classification:</b> ${data.classification}`);
    section.addWidget(classificationParagraph);
  }
  
  // Multiple classifications display
  if (data.classifications && Array.isArray(data.classifications)) {
    const classificationsHeader = CardService.newTextParagraph()
      .setText('<b>Classifications:</b>');
    section.addWidget(classificationsHeader);
    
    data.classifications.forEach(item => {
      const classificationItem = CardService.newTextParagraph()
        .setText(`• ${item.label} (${Math.round(item.confidence * 100)}%)`);
      section.addWidget(classificationItem);
    });
  }
  
  // Confidence score display
  if (data.confidence && data.confidence > 0) {
    const confidenceParagraph = CardService.newTextParagraph()
      .setText(`<b>Confidence:</b> ${Math.round(data.confidence * 100)}%`);
    section.addWidget(confidenceParagraph);
  }
  
  // Action buttons section with Fluent UI button patterns
  const divider = CardService.newDivider();
  section.addWidget(divider);
  
  // Apply Labels button
  const applyAction = CardService.newAction()
    .setFunctionName('onApplyLabels');
  
  const applyButton = CardService.newTextButton()
    .setText('Apply Labels')
    .setOnClickAction(applyAction);
  section.addWidget(applyButton);
  
  // Reclassify button
  const reclassifyAction = CardService.newAction()
    .setFunctionName('onReclassifyEmail');
  
  const reclassifyButton = CardService.newTextButton()
    .setText('Reclassify')
    .setOnClickAction(reclassifyAction);
  section.addWidget(reclassifyButton);
  
  card.addSection(section);
  
  return card.build();
}

/**
 * Creates a placeholder card for initial display
 * Shows when no email is selected or addon is loading
 * 
 * @returns {Card} Google Apps Script Card
 */
function createPlaceholderCard() {
  const card = CardService.newCardBuilder();
  
  // Header section
  const header = CardService.newCardHeader()
    .setTitle('Gmail Graph-Classifier')
    .setSubtitle('AI-Powered Email Classification');
  
  card.setHeader(header);
  
  // Main content section
  const section = CardService.newCardSection();
  
  // Welcome message
  const welcomeParagraph = CardService.newTextParagraph()
    .setText('<b>Welcome to Gmail Graph-Classifier!</b>');
  section.addWidget(welcomeParagraph);
  
  // Description
  const descriptionParagraph = CardService.newTextParagraph()
    .setText('This add-on automatically classifies your emails using AI-powered knowledge graphs of People, Projects, Topics, and Companies.');
  section.addWidget(descriptionParagraph);
  
  // Instructions
  const instructionsParagraph = CardService.newTextParagraph()
    .setText('Select an email to see its classification, or compose a new email to classify it before sending.');
  section.addWidget(instructionsParagraph);
  
  // Divider
  const divider = CardService.newDivider();
  section.addWidget(divider);
  
  // Status
  const statusParagraph = CardService.newTextParagraph()
    .setText('<i>Ready for email classification</i>');
  section.addWidget(statusParagraph);
  
  card.addSection(section);
  
  return card.build();
}

/**
 * Creates an error card for displaying error messages
 * Provides user-friendly error handling with retry options
 * 
 * @param {string} errorMessage - Error message to display
 * @returns {Card} Google Apps Script Card
 */
function createErrorCard(errorMessage) {
  const card = CardService.newCardBuilder();
  
  // Header section
  const header = CardService.newCardHeader()
    .setTitle('Gmail Graph-Classifier')
    .setSubtitle('Error');
  
  card.setHeader(header);
  
  // Error content section
  const section = CardService.newCardSection();
  
  // Error icon and title
  const errorTitle = CardService.newTextParagraph()
    .setText('<b>⚠️ Something went wrong</b>');
  section.addWidget(errorTitle);
  
  // Error message
  const errorParagraph = CardService.newTextParagraph()
    .setText(errorMessage || 'An unexpected error occurred');
  section.addWidget(errorParagraph);
  
  // Divider
  const divider = CardService.newDivider();
  section.addWidget(divider);
  
  // Retry button
  const retryAction = CardService.newAction()
    .setFunctionName('onRetryClassification');
  
  const retryButton = CardService.newTextButton()
    .setText('Retry')
    .setOnClickAction(retryAction);
  section.addWidget(retryButton);
  
  // Help button
  const helpAction = CardService.newAction()
    .setFunctionName('onShowHelp');
  
  const helpButton = CardService.newTextButton()
    .setText('Get Help')
    .setOnClickAction(helpAction);
  section.addWidget(helpButton);
  
  card.addSection(section);
  
  return card.build();
}

/**
 * Creates a loading card for showing classification in progress
 * Provides user feedback during async operations
 * 
 * @param {string} message - Loading message to display
 * @returns {Card} Google Apps Script Card
 */
function createLoadingCard(message = 'Classifying email...') {
  const card = CardService.newCardBuilder();
  
  // Header section
  const header = CardService.newCardHeader()
    .setTitle('Gmail Graph-Classifier')
    .setSubtitle('Processing');
  
  card.setHeader(header);
  
  // Loading content section
  const section = CardService.newCardSection();
  
  // Loading indicator
  const loadingTitle = CardService.newTextParagraph()
    .setText('<b>🔄 Processing...</b>');
  section.addWidget(loadingTitle);
  
  // Loading message
  const loadingParagraph = CardService.newTextParagraph()
    .setText(message);
  section.addWidget(loadingParagraph);
  
  // Progress description
  const progressParagraph = CardService.newTextParagraph()
    .setText('Please wait while we analyze your email and apply the appropriate classifications.');
  section.addWidget(progressParagraph);
  
  card.addSection(section);
  
  return card.build();
}

/**
 * Action handler for retry operations
 * Placeholder for retry functionality
 * 
 * @param {Object} event - Action event object
 * @returns {ActionResponse} Google Apps Script action response
 */
function onRetryClassification(_event) {
  const notification = CardService.newNotification()
    .setText('Retrying classification...');
  
  return CardService.newActionResponseBuilder()
    .setNotification(notification)
    .build();
}

/**
 * Action handler for help operations
 * Placeholder for help functionality
 * 
 * @param {Object} event - Action event object
 * @returns {ActionResponse} Google Apps Script action response
 */
function onShowHelp(_event) {
  const notification = CardService.newNotification()
    .setText('Help documentation coming soon...');
  
  return CardService.newActionResponseBuilder()
    .setNotification(notification)
    .build();
}

/**
 * Action handler for applying labels
 * Placeholder for label application functionality
 * 
 * @param {Object} event - Action event object
 * @returns {ActionResponse} Google Apps Script action response
 */
function onApplyLabels(_event) {
  const notification = CardService.newNotification()
    .setText('Labels applied successfully!');
  
  return CardService.newActionResponseBuilder()
    .setNotification(notification)
    .build();
}

/**
 * Action handler for reclassification
 * Placeholder for reclassification functionality
 * 
 * @param {Object} event - Action event object
 * @returns {ActionResponse} Google Apps Script action response
 */
function onReclassifyEmail(_event) {
  const notification = CardService.newNotification()
    .setText('Reclassifying email...');
  
  return CardService.newActionResponseBuilder()
    .setNotification(notification)
    .build();
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createClassificationCard,
    createPlaceholderCard,
    createErrorCard,
    createLoadingCard,
    onRetryClassification,
    onShowHelp,
    onApplyLabels,
    onReclassifyEmail
  };
}