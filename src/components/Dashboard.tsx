import React from 'react';
import {
  Card,
  Button,
  Text,
} from '@fluentui/react-components';



export const Dashboard: React.FC = () => {
  return (
    <div>
      <Text size={500} weight="semibold">Dashboard</Text>
      <Text>Welcome to your Gmail Graph-Classifier dashboard.</Text>
      
      <div style={{ padding: '20px' }}>
        <Card>
          <div style={{ padding: '16px' }}>
            <Text size={500} weight="semibold">Quick Actions</Text>
            <div style={{ marginTop: '16px' }}>
              <Button appearance="primary">Classify Thread</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};