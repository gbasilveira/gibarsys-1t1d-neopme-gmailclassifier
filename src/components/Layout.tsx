import React from 'react';
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  TabList,
  Tab,
  TabValue,
  Text,
} from '@fluentui/react-components';
import { 
  HomeRegular, 
  MailRegular, 
  ChatRegular, 
  SettingsRegular 
} from '@fluentui/react-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppStore } from '@/stores/appStore';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useAppStore();

  const tabs = [
    { value: '/', icon: HomeRegular, label: 'Dashboard' },
    { value: '/classify', icon: MailRegular, label: 'Classify' },
    { value: '/chat', icon: ChatRegular, label: 'Chat Assistant' },
    { value: '/settings', icon: SettingsRegular, label: 'Settings' },
  ];

  const selectedValue = location.pathname as TabValue;

  const handleTabSelect = (_: unknown, data: { value: TabValue }) => {
    navigate(data.value as string);
  };

  return (
    <FluentProvider theme={theme === 'dark' ? webDarkTheme : webLightTheme}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ width: '280px', backgroundColor: '#f5f5f5', padding: '16px' }}>
          <Text size={500} weight="semibold">Gmail Classifier</Text>
          <nav style={{ marginTop: '16px' }}>
            <TabList
              selectedValue={selectedValue}
              onTabSelect={handleTabSelect}
              vertical
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} value={tab.value}>
                  <tab.icon />
                  {tab.label}
                </Tab>
              ))}
            </TabList>
          </nav>
        </div>
        <main style={{ flex: '1', padding: '24px', overflow: 'auto' }}>
          {children}
        </main>
      </div>
    </FluentProvider>
  );
};