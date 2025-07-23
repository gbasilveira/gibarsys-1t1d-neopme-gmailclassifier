import React, { useState } from 'react';
import { Text, Input, Label } from '@fluentui/react-components';

export const ClassificationPanel: React.FC = () => {
  const [threadId, setThreadId] = useState<string>('');

  return (
    <div>
      <Text size={500} weight="semibold">Email Classification</Text>
      <Text>Classify email threads using AI-powered graph-based rules.</Text>

      <div style={{ padding: '20px' }}>
        <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '4px' }}>
          <Text size={500} weight="semibold">Input</Text>
          <div style={{ marginTop: '16px' }}>
            <Label htmlFor="threadId">Thread ID</Label>
            <Input
              id="threadId"
              value={threadId}
              onChange={(e) => setThreadId(e.target.value)}
              placeholder="Enter Gmail thread ID"
            />
          </div>
        </div>
      </div>
    </div>
  );
};