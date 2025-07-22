import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Title3,
  Body1,
  Button,
  Input,
  makeStyles,
  tokens,
  Spinner,
} from '@fluentui/react-components';
import { 
  SendRegular, 
  ChatRegular,
  PersonRegular,
  BotRegular 
} from '@fluentui/react-icons';
import type { ChatMessage } from '@/types';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 120px)',
  },
  chatContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  messagesContainer: {
    flex: '1',
    overflow: 'auto',
    padding: '16px',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  message: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
  },
  userMessage: {
    flexDirection: 'row-reverse',
  },
  messageContent: {
    maxWidth: '70%',
    padding: '12px 16px',
    borderRadius: '12px',
    wordWrap: 'break-word',
  },
  userMessageContent: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  assistantMessageContent: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  inputContainer: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-end',
  },
  input: {
    flex: '1',
  },
  sendButton: {
    flexShrink: 0,
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    flexShrink: 0,
  },
  userAvatar: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
  },
  assistantAvatar: {
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
  },
  typingIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: '12px',
    maxWidth: '70%',
  },
});

export const ChatAssistant: React.FC = () => {
  const styles = useStyles();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI assistant for Gmail classification. I can help you create classification rules, understand your email patterns, and answer questions about your inbox. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (): Promise<void> => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: getMockResponse(inputValue),
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const getMockResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('rule') || lowerInput.includes('classification')) {
      return 'I can help you create classification rules! Rules can be based on keywords, sender patterns, or AI-powered graph analysis. Would you like me to show you how to create a new rule?';
    }
    
    if (lowerInput.includes('help') || lowerInput.includes('how')) {
      return 'I can help you with:\n• Creating classification rules\n• Understanding your email patterns\n• Bulk classification\n• Label management\n\nWhat would you like to know more about?';
    }
    
    if (lowerInput.includes('bulk') || lowerInput.includes('multiple')) {
      return 'Bulk classification allows you to process multiple email threads at once. You can select threads by search criteria or date ranges. Would you like me to guide you through the bulk classification process?';
    }
    
    return 'I understand you\'re asking about Gmail classification. I can help you with rule creation, pattern analysis, and email organization. Could you be more specific about what you\'d like to accomplish?';
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      <Title3>Chat Assistant</Title3>
      <Body1>Get help with classification rules and email organization.</Body1>

      <div className={styles.container}>
        <Card>
          <CardHeader header={<Title3>AI Assistant</Title3>} />
          <CardContent>
            <div className={styles.chatContainer}>
              <div className={styles.messagesContainer}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`${styles.message} ${
                      message.type === 'user' ? styles.userMessage : ''
                    }`}
                  >
                    <div
                      className={`${styles.avatar} ${
                        message.type === 'user' ? styles.userAvatar : styles.assistantAvatar
                      }`}
                    >
                      {message.type === 'user' ? <PersonRegular /> : <BotRegular />}
                    </div>
                    <div
                      className={`${styles.messageContent} ${
                        message.type === 'user' ? styles.userMessageContent : styles.assistantMessageContent
                      }`}
                    >
                      <Body1>{message.content}</Body1>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className={styles.message}>
                    <div className={`${styles.avatar} ${styles.assistantAvatar}`}>
                      <BotRegular />
                    </div>
                    <div className={styles.typingIndicator}>
                      <Spinner size="tiny" />
                      <Body1>AI is typing...</Body1>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              <div className={styles.inputContainer}>
                <Input
                  className={styles.input}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about classification rules, email patterns, or get help..."
                  disabled={isTyping}
                />
                <Button
                  className={styles.sendButton}
                  appearance="primary"
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputValue.trim()}
                  icon={isTyping ? <Spinner size="tiny" /> : <SendRegular />}
                >
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};