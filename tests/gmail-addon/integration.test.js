/**
 * Integration tests for Gmail addon action handlers
 * Tests the action functions that handle user interactions
 */

// Note: Global mocks are set up in tests/setup.js

describe('Gmail Addon Action Handlers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Main Action Handlers', () => {
    test('onClassifyEmail should return notification response', () => {
      // Arrange
      const mockEvent = { parameters: { messageId: 'test-message-id' } };

      // Act
      const result = require('../../src/gmail-addon/main.js').onClassifyEmail(mockEvent);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newNotification).toHaveBeenCalled();
      expect(CardService.newActionResponseBuilder).toHaveBeenCalled();
    });

    test('onRefreshClassification should return notification response', () => {
      // Arrange
      const mockEvent = {};

      // Act
      const result = require('../../src/gmail-addon/main.js').onRefreshClassification(mockEvent);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newNotification).toHaveBeenCalled();
      expect(CardService.newActionResponseBuilder).toHaveBeenCalled();
    });
  });

  describe('UI Component Action Handlers', () => {
    test('onRetryClassification should return notification response', () => {
      // Arrange
      const mockEvent = {};

      // Act
      const result = require('../../src/gmail-addon/ui-components.js').onRetryClassification(mockEvent);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newNotification).toHaveBeenCalled();
      expect(CardService.newActionResponseBuilder).toHaveBeenCalled();
    });

    test('onShowHelp should return notification response', () => {
      // Arrange
      const mockEvent = {};

      // Act
      const result = require('../../src/gmail-addon/ui-components.js').onShowHelp(mockEvent);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newNotification).toHaveBeenCalled();
      expect(CardService.newActionResponseBuilder).toHaveBeenCalled();
    });

    test('onApplyLabels should return notification response', () => {
      // Arrange
      const mockEvent = {};

      // Act
      const result = require('../../src/gmail-addon/ui-components.js').onApplyLabels(mockEvent);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newNotification).toHaveBeenCalled();
      expect(CardService.newActionResponseBuilder).toHaveBeenCalled();
    });

    test('onReclassifyEmail should return notification response', () => {
      // Arrange
      const mockEvent = {};

      // Act
      const result = require('../../src/gmail-addon/ui-components.js').onReclassifyEmail(mockEvent);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newNotification).toHaveBeenCalled();
      expect(CardService.newActionResponseBuilder).toHaveBeenCalled();
    });
  });

  describe('createLoadingCard', () => {
    test('should create loading card with default message', () => {
      // Act
      const result = require('../../src/gmail-addon/ui-components.js').createLoadingCard();

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newCardBuilder).toHaveBeenCalled();
      expect(CardService.newCardHeader).toHaveBeenCalled();
      expect(CardService.newCardSection).toHaveBeenCalled();
    });

    test('should create loading card with custom message', () => {
      // Arrange
      const customMessage = 'Processing your request...';

      // Act
      const result = require('../../src/gmail-addon/ui-components.js').createLoadingCard(customMessage);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.setText).toHaveBeenCalledWith(customMessage);
    });
  });

  describe('Edge Cases and Error Scenarios', () => {
    test('buildClassificationCard should handle data with confidence score', () => {
      // Arrange
      const mockData = {
        messageId: 'test-id',
        subject: 'Test Subject',
        classification: 'Project: Alpha',
        confidence: 0.85
      };

      // Act
      const result = require('../../src/gmail-addon/main.js').buildClassificationCard(mockData);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.setText).toHaveBeenCalledWith(expect.stringContaining('85%'));
    });

    test('buildClassificationCard should handle data without confidence score', () => {
      // Arrange
      const mockData = {
        messageId: 'test-id',
        subject: 'Test Subject',
        classification: 'Project: Alpha',
        confidence: 0
      };

      // Act
      const result = require('../../src/gmail-addon/main.js').buildClassificationCard(mockData);

      // Assert
      expect(result).toBeDefined();
      // Should not add confidence paragraph when confidence is 0
    });

    test('createClassificationCard should handle multiple classifications', () => {
      // Arrange
      const mockData = {
        subject: 'Test Email',
        classifications: [
          { label: 'Project: Alpha', confidence: 0.9 },
          { label: 'Topic: Development', confidence: 0.8 },
          { label: 'Company: TechCorp', confidence: 0.7 }
        ],
        confidence: 0.85
      };

      // Act
      const result = require('../../src/gmail-addon/ui-components.js').createClassificationCard(mockData);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.setText).toHaveBeenCalledWith(expect.stringContaining('90%'));
      expect(CardService.setText).toHaveBeenCalledWith(expect.stringContaining('80%'));
      expect(CardService.setText).toHaveBeenCalledWith(expect.stringContaining('70%'));
    });

    test('createClassificationCard should handle empty data gracefully', () => {
      // Arrange
      const mockData = {};

      // Act
      const result = require('../../src/gmail-addon/ui-components.js').createClassificationCard(mockData);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newCardBuilder).toHaveBeenCalled();
    });

    test('createErrorCard should handle undefined error message', () => {
      // Act
      const result = require('../../src/gmail-addon/ui-components.js').createErrorCard();

      // Assert
      expect(result).toBeDefined();
      expect(CardService.setText).toHaveBeenCalledWith('An unexpected error occurred');
    });
  });
});