import React from 'react';
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  Text,
} from '@fluentui/react-components';
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
    { value: '/', label: 'Dashboard' },
    { value: '/classify', label: 'Classify' },
    { value: '/chat', label: 'Chat Assistant' },
    { value: '/settings', label: 'Settings' },
  ];

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <FluentProvider theme={theme === 'dark' ? webDarkTheme : webLightTheme}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ width: '280px', backgroundColor: '#f5f5f5', padding: '16px' }}>
          <Text size={500} weight="semibold">Gmail Classifier</Text>
          <nav style={{ marginTop: '16px' }}>
            {tabs.map((tab) => (
              <div
                key={tab.value}
                onClick={() => handleTabClick(tab.value)}
                style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  backgroundColor: location.pathname === tab.value ? '#e0e0e0' : 'transparent',
                  borderRadius: '4px',
                  marginBottom: '4px'
                }}
              >
                <Text>{tab.label}</Text>
              </div>
            ))}
          </nav>
        </div>
        <main style={{ flex: '1', padding: '24px', overflow: 'auto' }}>
          {children}
        </main>
      </div>
    </FluentProvider>
  );
};