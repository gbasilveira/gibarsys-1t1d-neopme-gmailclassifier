import React from 'react';
import {
  Card,
  Button,
  Input,
  Label,
  Switch,
  Select,
  Option,
  Text,
} from '@fluentui/react-components';

export const Settings: React.FC = () => {
  return (
    <div>
      <Text size={500} weight="semibold">Settings</Text>
      <Text>Configure your Gmail Graph-Classifier preferences.</Text>

      <div style={{ padding: '20px' }}>
        <Card>
          <div style={{ padding: '16px' }}>
            <Text size={500} weight="semibold">General Settings</Text>
            <div style={{ marginTop: '16px' }}>
              <Label>Theme</Label>
              <Select defaultValue="light">
                <Option value="light">Light</Option>
                <Option value="dark">Dark</Option>
              </Select>
            </div>
            <div style={{ marginTop: '16px' }}>
              <Label>Notifications</Label>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};