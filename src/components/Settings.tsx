import React from 'react';
import { Text, Label, Switch, Select, Option } from '@fluentui/react-components';

export const Settings: React.FC = () => {
  return (
    <div>
      <Text size={500} weight="semibold">Settings</Text>
      <Text>Configure your Gmail Graph-Classifier preferences.</Text>

      <div style={{ padding: '20px' }}>
        <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '4px' }}>
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
      </div>
    </div>
  );
};