/**
 * Test suite for Gmail addon UI components
 * Following TDD approach with Fluent UI 2.0 requirements
 */

// Note: Global mocks are set up in tests/setup.js

describe('UI Components', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('ClassificationCard', () => {
    test('should create card with Fluent UI design patterns', () => {
      // Arrange
      const mockData = {
        subject: 'Test Email Subject',
        classification: 'Project: Alpha',
        confidence: 0.85
      };

      // Act
      require('../../src/gmail-addon/ui-components.js').createClassificationCard(mockData);

      // Assert
      expect(CardService.newCardBuilder).toHaveBeenCalled();
      expect(CardService.newCardHeader).toHaveBeenCalled();
      expect(CardService.newCardSection).toHaveBeenCalled();
    });

    test('should include classification results section', () => {
      // Arrange
      const mockData = {
        subject: 'Test Email',
        classifications: [
          { label: 'Project: Alpha', confidence: 0.9 },
          { label: 'Topic: Development', confidence: 0.8 }
        ]
      };

      // Act
      require('../../src/gmail-addon/ui-components.js').createClassificationCard(mockData);

      // Assert
      expect(CardService.newTextParagraph).toHaveBeenCalled();
      expect(CardService.addWidget).toHaveBeenCalled();
    });

    test('should include action buttons for user interaction', () => {
      // Arrange
      const mockData = { subject: 'Test Email' };

      // Act
      require('../../src/gmail-addon/ui-components.js').createClassificationCard(mockData);

      // Assert
      expect(CardService.newTextButton).toHaveBeenCalled();
      expect(CardService.newAction).toHaveBeenCalled();
    });
  });

  describe('PlaceholderCard', () => {
    test('should create placeholder card with proper structure', () => {
      // Act
      require('../../src/gmail-addon/ui-components.js').createPlaceholderCard();

      // Assert
      expect(CardService.newCardBuilder).toHaveBeenCalled();
      expect(CardService.newCardSection).toHaveBeenCalled();
      expect(CardService.build).toHaveBeenCalled();
    });

    test('should include placeholder content and branding', () => {
      // Act
      require('../../src/gmail-addon/ui-components.js').createPlaceholderCard();

      // Assert
      expect(CardService.newTextParagraph).toHaveBeenCalled();
      expect(CardService.setText).toHaveBeenCalledWith(expect.stringContaining('Gmail Graph-Classifier'));
    });
  });

  describe('ErrorCard', () => {
    test('should create error card with appropriate messaging', () => {
      // Arrange
      const errorMessage = 'Classification service unavailable';

      // Act
      require('../../src/gmail-addon/ui-components.js').createErrorCard(errorMessage);

      // Assert
      expect(CardService.newCardBuilder).toHaveBeenCalled();
      expect(CardService.setText).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
    });

    test('should include retry action button', () => {
      // Arrange
      const errorMessage = 'Network error';

      // Act
      require('../../src/gmail-addon/ui-components.js').createErrorCard(errorMessage);

      // Assert
      expect(CardService.newTextButton).toHaveBeenCalled();
      expect(CardService.setText).toHaveBeenCalledWith('Retry');
    });
  });
});