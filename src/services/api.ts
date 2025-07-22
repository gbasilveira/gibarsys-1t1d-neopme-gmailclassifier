import axios, { AxiosInstance, AxiosResponse } from 'axios';
import type { 
  ApiResponse, 
  ClassificationResult, 
  ClassificationRule,
  EmailThread,
  EmailLabel,
  ChatMessage 
} from '@/types';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.VITE_API_ENDPOINT || 'http://localhost:3001',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = localStorage.getItem('auth-token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          localStorage.removeItem('auth-token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Classification methods
  async classifyThread(threadId: string): Promise<ClassificationResult> {
    const response = await this.client.post<ApiResponse<ClassificationResult>>(
      '/api/classify/thread',
      { threadId }
    );
    return response.data.data!;
  }

  async classifyBulk(threadIds: string[]): Promise<ClassificationResult[]> {
    const response = await this.client.post<ApiResponse<ClassificationResult[]>>(
      '/api/classify/bulk',
      { threadIds }
    );
    return response.data.data!;
  }

  // Rules management
  async getRules(): Promise<ClassificationRule[]> {
    const response = await this.client.get<ApiResponse<ClassificationRule[]>>(
      '/api/rules'
    );
    return response.data.data!;
  }

  async createRule(rule: Omit<ClassificationRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<ClassificationRule> {
    const response = await this.client.post<ApiResponse<ClassificationRule>>(
      '/api/rules',
      rule
    );
    return response.data.data!;
  }

  async updateRule(id: string, rule: Partial<ClassificationRule>): Promise<ClassificationRule> {
    const response = await this.client.put<ApiResponse<ClassificationRule>>(
      `/api/rules/${id}`,
      rule
    );
    return response.data.data!;
  }

  async deleteRule(id: string): Promise<void> {
    await this.client.delete(`/api/rules/${id}`);
  }

  // Gmail integration
  async getThread(threadId: string): Promise<EmailThread> {
    const response = await this.client.get<ApiResponse<EmailThread>>(
      `/api/gmail/threads/${threadId}`
    );
    return response.data.data!;
  }

  async getThreads(query?: string): Promise<EmailThread[]> {
    const params = query ? { q: query } : {};
    const response = await this.client.get<ApiResponse<EmailThread[]>>(
      '/api/gmail/threads',
      { params }
    );
    return response.data.data!;
  }

  async applyLabels(threadId: string, labelIds: string[]): Promise<void> {
    await this.client.post('/api/gmail/labels/apply', {
      threadId,
      labelIds,
    });
  }

  async getLabels(): Promise<EmailLabel[]> {
    const response = await this.client.get<ApiResponse<EmailLabel[]>>(
      '/api/gmail/labels'
    );
    return response.data.data!;
  }

  // Chat service
  async sendMessage(message: string): Promise<ChatMessage> {
    const response = await this.client.post<ApiResponse<ChatMessage>>(
      '/api/chat/message',
      { message }
    );
    return response.data.data!;
  }

  async getChatHistory(): Promise<ChatMessage[]> {
    const response = await this.client.get<ApiResponse<ChatMessage[]>>(
      '/api/chat/history'
    );
    return response.data.data!;
  }

  async clearChatHistory(): Promise<void> {
    await this.client.delete('/api/chat/history');
  }
}

export const apiService = new ApiService();