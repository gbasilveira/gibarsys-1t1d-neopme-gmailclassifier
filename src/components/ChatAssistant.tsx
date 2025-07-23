import React, { useState } from 'react';
import { Text, Input } from '@fluentui/react-components';

export const ChatAssistant: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <div>
      <Text size={500} weight="semibold">Chat Assistant</Text>
      <Text>Get help with classification rules and email organization.</Text>

      <div style={{ padding: '20px' }}>
        <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '4px' }}>
          <Text size={500} weight="semibold">AI Assistant</Text>
          <div style={{ marginTop: '16px' }}>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me about classification rules..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};