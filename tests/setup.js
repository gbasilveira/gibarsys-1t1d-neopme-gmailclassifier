/**
 * Jest test setup file
 * Configures global mocks for Google Apps Script services
 */

// Create a chainable mock that returns itself for all methods
const createChainableMock = () => {
  const mock = {};
  const methodNames = [
    'newCardBuilder', 'newCardSection', 'newCardHeader', 'newTextParagraph',
    'newTextButton', 'newAction', 'newActionResponseBuilder', 'newNotification',
    'newGrid', 'newGridItem', 'newDivider', 'setText', 'setTitle', 'setSubtitle',
    'setOnClickAction', 'setFunctionName', 'setParameters', 'addWidget',
    'addSection', 'setHeader', 'setNotification', 'build'
  ];
  
  methodNames.forEach(methodName => {
    if (methodName === 'build') {
      mock[methodName] = jest.fn().mockReturnValue({});
    } else {
      mock[methodName] = jest.fn().mockReturnValue(mock);
    }
  });
  
  return mock;
};

// Mock Google Apps Script global services
global.CardService = createChainableMock();

global.GmailApp = {
  getMessageById: jest.fn(),
  getThreadById: jest.fn(),
  getUserLabelByName: jest.fn(),
  createLabel: jest.fn(),
  search: jest.fn()
};

global.console = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn()
};

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});