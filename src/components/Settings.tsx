import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Title3,
  Body1,
  Button,
  Input,
  Label,
  Switch,
  Select,
  Option,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { 
  SettingsRegular, 
  SaveRegular,
  PersonRegular,
  NotificationsRegular,
  ThemeRegular 
} from '@fluentui/react-icons';
import { useAppStore } from '@/stores/appStore';
import type { AppSettings } from '@/types';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
  },
  settingGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  settingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  settingLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  actions: {
    gridColumn: '1 / -1',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '24px',
  },
});

export const Settings: React.FC = () => {
  const styles = useStyles();
  const { settings, setSettings } = useAppStore();
  const [localSettings, setLocalSettings] = useState<AppSettings>(settings);
  const [hasChanges, setHasChanges] = useState<boolean>(false);

  const handleSettingChange = (key: keyof AppSettings, value: unknown): void => {
    const newSettings = { ...localSettings, [key]: value };
    setLocalSettings(newSettings);
    setHasChanges(true);
  };

  const handleSave = (): void => {
    setSettings(localSettings);
    setHasChanges(false);
  };

  const handleReset = (): void => {
    setLocalSettings(settings);
    setHasChanges(false);
  };

  return (
    <div>
      <Title3>Settings</Title3>
      <Body1>Configure your Gmail Graph-Classifier preferences.</Body1>

      <div className={styles.container}>
        <Card>
          <CardHeader header={<Title3>General Settings</Title3>} />
          <CardContent>
            <div className={styles.settingGroup}>
              <div className={styles.settingItem}>
                <div className={styles.settingLabel}>
                  <ThemeRegular />
                  <Label>Theme</Label>
                </div>
                <Select
                  value={localSettings.theme}
                  onChange={(e) => handleSettingChange('theme', e.target.value)}
                >
                  <Option value="light">Light</Option>
                  <Option value="dark">Dark</Option>
                </Select>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingLabel}>
                  <PersonRegular />
                  <Label>Language</Label>
                </div>
                <Select
                  value={localSettings.language}
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                >
                  <Option value="en">English</Option>
                  <Option value="es">Spanish</Option>
                  <Option value="fr">French</Option>
                  <Option value="de">German</Option>
                </Select>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingLabel}>
                  <NotificationsRegular />
                  <Label>Notifications</Label>
                </div>
                <Switch
                  checked={localSettings.notifications}
                  onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader header={<Title3>Classification Settings</Title3>} />
          <CardContent>
            <div className={styles.settingGroup}>
              <div className={styles.settingItem}>
                <Label>Auto Classification</Label>
                <Switch
                  checked={localSettings.autoClassification}
                  onChange={(e) => handleSettingChange('autoClassification', e.target.checked)}
                />
              </div>

              <div className={styles.inputGroup}>
                <Label htmlFor="apiEndpoint">API Endpoint</Label>
                <Input
                  id="apiEndpoint"
                  value={localSettings.apiEndpoint}
                  onChange={(e) => handleSettingChange('apiEndpoint', e.target.value)}
                  placeholder="https://api.example.com"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader header={<Title3>Advanced Settings</Title3>} />
          <CardContent>
            <div className={styles.settingGroup}>
              <div className={styles.settingItem}>
                <Label>Debug Mode</Label>
                <Switch checked={false} disabled />
              </div>

              <div className={styles.settingItem}>
                <Label>Performance Mode</Label>
                <Switch checked={true} disabled />
              </div>

              <div className={styles.inputGroup}>
                <Label>Cache Duration (minutes)</Label>
                <Input
                  type="number"
                  value="30"
                  disabled
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className={styles.actions}>
          <Button
            appearance="outline"
            onClick={handleReset}
            disabled={!hasChanges}
          >
            Reset
          </Button>
          <Button
            appearance="primary"
            onClick={handleSave}
            disabled={!hasChanges}
            icon={<SaveRegular />}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};