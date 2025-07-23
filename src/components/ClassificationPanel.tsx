import React, { useState } from 'react';
import {
  Card,
  Button,
  Input,
  Label,
  Text,
} from '@fluentui/react-components';

export const ClassificationPanel: React.FC = () => {
  const [threadId, setThreadId] = useState<string>('');

  return (
    <div>
      <Text size={500} weight="semibold">Email Classification</Text>
      <Text>Classify email threads using AI-powered graph-based rules.</Text>

      <div style={{ padding: '20px' }}>
        <Card>
          <div style={{ padding: '16px' }}>
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
            <div style={{ marginTop: '16px' }}>
              <Button appearance="primary">
                Classify Thread
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};