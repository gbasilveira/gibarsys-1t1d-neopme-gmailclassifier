/**
 * Gmail Graph-Classifier Add-on - Main Entry Points
 * 
 * This module provides the main trigger functions for the Gmail addon,
 * following Google Apps Script addon patterns and Fluent UI design principles.
 */

/**
 * Main trigger function for Gmail messages
 * Called when user opens an email in Gmail
 * 
 * @param {Object} event - Gmail addon event object
 * @param {Object} event.gmail - Gmail-specific event data
 * @param {string} event.gmail.messageId - Current message ID
 * @param {string} event.gmail.threadId - Current thread ID
 * @returns {Card} Google Apps Script Card for display
 */
function onGmailMessage(event) {
  try {
    // Extract event data safely
    const messageId = event?.gmail?.messageId;
    const threadId = event?.gmail?.threadId;
    
    if (!messageId) {
      return require('./ui-components.js').createPlaceholderCard();
    }

    // Get message data for classification
    const messageData = {
      messageId: messageId,
      threadId: threadId,
      subject: 'Email Subject', // Placeholder - will be fetched from Gmail API
      classification: 'Analyzing...', // Placeholder - will be determined by classification service
      confidence: 0.0
    };

    return buildClassificationCard(messageData);
    
  } catch (error) {
    console.error('Error in onGmailMessage:', error);
    return require('./ui-components.js').createErrorCard('Failed to load email classification');
  }
}

/**
 * Trigger function for compose actions
 * Called when user clicks "Classify Email" in compose mode
 * 
 * @param {Object} event - Gmail compose event object
 * @param {Object} event.gmail.composeTrigger - Compose-specific event data
 * @param {string} event.gmail.composeTrigger.draftId - Draft message ID
 * @returns {Card} Google Apps Script Card for display
 */
function onComposeClassify(event) {
  try {
    const draftId = event?.gmail?.composeTrigger?.draftId;
    
    if (!draftId) {
      return require('./ui-components.js').createErrorCard('No draft found for classification');
    }

    // Placeholder data for compose classification
    const composeData = {
      draftId: draftId,
      subject: 'Draft Email',
      classification: 'Ready for classification',
      confidence: 0.0
    };

    return buildClassificationCard(composeData);
    
  } catch (error) {
    console.error('Error in onComposeClassify:', error);
    return require('./ui-components.js').createErrorCard('Failed to classify draft email');
  }
}

/**
 * Builds the main classification card UI
 * Uses Fluent UI design patterns through Google Apps Script CardService
 * 
 * @param {Object} data - Email data for classification display
 * @param {string} data.messageId - Email message ID
 * @param {string} data.subject - Email subject line
 * @param {string} data.classification - Classification result
 * @param {number} data.confidence - Classification confidence score
 * @returns {Card} Google Apps Script Card
 */
function buildClassificationCard(data) {
  const card = CardService.newCardBuilder();
  
  // Header section with Fluent UI styling
  const header = CardService.newCardHeader()
    .setTitle('Gmail Graph-Classifier')
    .setSubtitle('AI-Powered Email Classification');
  
  card.setHeader(header);
  
  // Main content section
  const section = CardService.newCardSection();
  
  // Email subject display
  const subjectParagraph = CardService.newTextParagraph()
    .setText(`<b>Subject:</b> ${data.subject || 'Unknown'}`);
  section.addWidget(subjectParagraph);
  
  // Classification result display
  const classificationParagraph = CardService.newTextParagraph()
    .setText(`<b>Classification:</b> ${data.classification || 'Pending'}`);
  section.addWidget(classificationParagraph);
  
  // Confidence score display
  if (data.confidence > 0) {
    const confidenceParagraph = CardService.newTextParagraph()
      .setText(`<b>Confidence:</b> ${Math.round(data.confidence * 100)}%`);
    section.addWidget(confidenceParagraph);
  }
  
  // Action buttons section
  const divider = CardService.newDivider();
  section.addWidget(divider);
  
  // Classify button
  const classifyAction = CardService.newAction()
    .setFunctionName('onClassifyEmail')
    .setParameters({ messageId: data.messageId || data.draftId });
  
  const classifyButton = CardService.newTextButton()
    .setText('Classify Email')
    .setOnClickAction(classifyAction);
  section.addWidget(classifyButton);
  
  // Refresh button
  const refreshAction = CardService.newAction()
    .setFunctionName('onRefreshClassification');
  
  const refreshButton = CardService.newTextButton()
    .setText('Refresh')
    .setOnClickAction(refreshAction);
  section.addWidget(refreshButton);
  
  card.addSection(section);
  
  return card.build();
}

/**
 * Action handler for classify email button
 * Placeholder for classification service integration
 * 
 * @param {Object} event - Action event object
 * @returns {ActionResponse} Google Apps Script action response
 */
function onClassifyEmail(_event) {
  // Placeholder implementation
  // In full implementation, this would call the n8n workflow
  // and update the card with classification results
  
  const notification = CardService.newNotification()
    .setText('Classification started... (placeholder)');
  
  return CardService.newActionResponseBuilder()
    .setNotification(notification)
    .build();
}

/**
 * Action handler for refresh classification button
 * Placeholder for refreshing classification results
 * 
 * @param {Object} event - Action event object
 * @returns {ActionResponse} Google Apps Script action response
 */
function onRefreshClassification(_event) {
  // Placeholder implementation
  // In full implementation, this would refresh the current classification
  
  const notification = CardService.newNotification()
    .setText('Refreshing classification... (placeholder)');
  
  return CardService.newActionResponseBuilder()
    .setNotification(notification)
    .build();
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    onGmailMessage,
    onComposeClassify,
    buildClassificationCard,
    onClassifyEmail,
    onRefreshClassification
  };
}