import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ClassificationPanel } from './components/ClassificationPanel';
import { ChatAssistant } from './components/ChatAssistant';
import { Settings } from './components/Settings';
import { useAppStore } from './stores/appStore';

const App: React.FC = () => {
  const { theme } = useAppStore();

  return (
    <FluentProvider theme={theme === 'dark' ? webLightTheme : webLightTheme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/classify" element={<ClassificationPanel />} />
            <Route path="/chat" element={<ChatAssistant />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </FluentProvider>
  );
};

export default App;