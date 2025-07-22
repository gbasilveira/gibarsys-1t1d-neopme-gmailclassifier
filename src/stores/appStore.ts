import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { AppStore, User, AppSettings } from '@/types';

const defaultSettings: AppSettings = {
  theme: 'light',
  language: 'en',
  notifications: true,
  autoClassification: false,
  apiEndpoint: process.env.VITE_API_ENDPOINT || 'http://localhost:3001',
};

export const useAppStore = create<AppStore>()(
  devtools(
    (set, get) => ({
      // State
      user: null,
      settings: defaultSettings,
      theme: 'light',
      isLoading: false,
      error: null,

      // Actions
      setUser: (user: User | null) => {
        set({ user });
        if (user) {
          // Update settings with user preferences
          set({ settings: { ...get().settings, ...user.preferences } });
        }
      },

      setSettings: (settings: Partial<AppSettings>) => {
        const currentSettings = get().settings;
        const newSettings = { ...currentSettings, ...settings };
        set({ settings: newSettings });

        // Persist to localStorage
        localStorage.setItem('app-settings', JSON.stringify(newSettings));

        // Update user preferences if user is logged in
        const user = get().user;
        if (user) {
          set({
            user: {
              ...user,
              preferences: newSettings,
            },
          });
        }
      },

      setTheme: (theme: 'light' | 'dark') => {
        set({ theme });
        // Update settings
        get().setSettings({ theme });
      },

      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },

      setError: (error: string | null) => {
        set({ error });
      },

      // Initialize from localStorage
      initialize: () => {
        try {
          const savedSettings = localStorage.getItem('app-settings');
          if (savedSettings) {
            const settings = JSON.parse(savedSettings) as AppSettings;
            set({ settings });
          }
        } catch (error) {
          console.error('Failed to load settings from localStorage:', error);
        }
      },
    }),
    {
      name: 'app-store',
    },
  ),
);