/**
 * Test suite for Gmail addon main functionality
 * Following TDD approach - tests written before implementation
 */

// Note: Global mocks are set up in tests/setup.js

describe('Gmail Addon Main Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('onGmailMessage', () => {
    test('should return a card when triggered', () => {
      // Arrange
      const mockEvent = {
        gmail: {
          messageId: 'test-message-id',
          threadId: 'test-thread-id'
        }
      };

      // Act
      const result = require('../../src/gmail-addon/main.js').onGmailMessage(mockEvent);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newCardBuilder).toHaveBeenCalled();
    });

    test('should handle missing event data gracefully', () => {
      // Arrange
      const mockEvent = {};

      // Act & Assert
      expect(() => {
        require('../../src/gmail-addon/main.js').onGmailMessage(mockEvent);
      }).not.toThrow();
    });


  });

  describe('onComposeClassify', () => {
    test('should return classification card for compose trigger', () => {
      // Arrange
      const mockEvent = {
        gmail: {
          composeTrigger: {
            draftId: 'test-draft-id'
          }
        }
      };

      // Act
      const result = require('../../src/gmail-addon/main.js').onComposeClassify(mockEvent);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.newCardBuilder).toHaveBeenCalled();
    });

    test('should return error card when no draft ID is provided', () => {
      // Arrange
      const mockEvent = {
        gmail: {
          composeTrigger: {}
        }
      };

      // Act
      const result = require('../../src/gmail-addon/main.js').onComposeClassify(mockEvent);

      // Assert
      expect(result).toBeDefined();
      expect(CardService.setText).toHaveBeenCalledWith('No draft found for classification');
    });


  });

  describe('buildClassificationCard', () => {
    test('should build card with Fluent UI styling', () => {
      // Arrange
      const mockData = {
        messageId: 'test-id',
        subject: 'Test Subject'
      };

      // Act
      require('../../src/gmail-addon/main.js').buildClassificationCard(mockData);

      // Assert
      expect(CardService.newCardBuilder).toHaveBeenCalled();
      expect(CardService.newCardSection).toHaveBeenCalled();
      expect(CardService.newTextParagraph).toHaveBeenCalled();
    });
  });
});