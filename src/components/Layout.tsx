import React from 'react';
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  TabList,
  Tab,
  TabValue,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { 
  HomeRegular, 
  MailRegular, 
  ChatRegular, 
  SettingsRegular 
} from '@fluentui/react-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppStore } from '@/stores/appStore';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  sidebar: {
    width: '280px',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '16px',
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
    margin: '0',
  },
  nav: {
    flex: '1',
    padding: '16px 0',
  },
  content: {
    flex: '1',
    padding: '24px',
    overflow: 'auto',
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const styles = useStyles();
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
      <div className={styles.root}>
        <div className={styles.sidebar}>
          <div className={styles.header}>
            <h1 className={styles.title}>Gmail Classifier</h1>
          </div>
          <nav className={styles.nav}>
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
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </FluentProvider>
  );
};