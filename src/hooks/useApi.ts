import { useState, useCallback } from 'react';
import { apiService } from '@/services/api';
import { useAppStore } from '@/stores/appStore';
import type { 
  ClassificationResult, 
  ClassificationRule,
  EmailThread,
  EmailLabel,
  ChatMessage 
} from '@/types';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  execute: (...args: unknown[]) => Promise<T | null>;
  reset: () => void;
}

export const useApi = <T>(
  apiCall: (...args: unknown[]) => Promise<T>
): UseApiReturn<T> => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const { setLoading, setError } = useAppStore();

  const execute = useCallback(
    async (...args: unknown[]): Promise<T | null> => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      setLoading(true);
      setError(null);

      try {
        const result = await apiCall(...args);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        setState(prev => ({ ...prev, loading: false, error: errorMessage }));
        setError(errorMessage);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [apiCall, setLoading, setError]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
};

// Specific API hooks
export const useClassifyThread = () => {
  return useApi(apiService.classifyThread);
};

export const useClassifyBulk = () => {
  return useApi(apiService.classifyBulk);
};

export const useGetRules = () => {
  return useApi(apiService.getRules);
};

export const useCreateRule = () => {
  return useApi(apiService.createRule);
};

export const useUpdateRule = () => {
  return useApi(apiService.updateRule);
};

export const useDeleteRule = () => {
  return useApi(apiService.deleteRule);
};

export const useGetThread = () => {
  return useApi(apiService.getThread);
};

export const useGetThreads = () => {
  return useApi(apiService.getThreads);
};

export const useApplyLabels = () => {
  return useApi(apiService.applyLabels);
};

export const useGetLabels = () => {
  return useApi(apiService.getLabels);
};

export const useSendMessage = () => {
  return useApi(apiService.sendMessage);
};

export const useGetChatHistory = () => {
  return useApi(apiService.getChatHistory);
};