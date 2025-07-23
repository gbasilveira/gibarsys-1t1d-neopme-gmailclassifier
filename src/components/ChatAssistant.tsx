import React, { useState } from 'react';
import {
  Card,
  Button,
  Input,
  Text,
} from '@fluentui/react-components';

export const ChatAssistant: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <div>
      <Text size={500} weight="semibold">Chat Assistant</Text>
      <Text>Get help with classification rules and email organization.</Text>

      <div style={{ padding: '20px' }}>
        <Card>
          <div style={{ padding: '16px' }}>
            <Text size={500} weight="semibold">AI Assistant</Text>
            <div style={{ marginTop: '16px' }}>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me about classification rules..."
              />
            </div>
            <div style={{ marginTop: '16px' }}>
              <Button appearance="primary">
                Send Message
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};