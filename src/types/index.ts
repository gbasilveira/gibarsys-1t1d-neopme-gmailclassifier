// Core application types for Gmail Graph-Classifier Add-on

export interface EmailThread {
  id: string;
  subject: string;
  participants: EmailParticipant[];
  messages: EmailMessage[];
  labels: EmailLabel[];
  lastUpdated: Date;
  snippet: string;
}

export interface EmailParticipant {
  email: string;
  name: string;
  type: 'from' | 'to' | 'cc' | 'bcc';
}

export interface EmailMessage {
  id: string;
  from: EmailParticipant;
  to: EmailParticipant[];
  cc?: EmailParticipant[];
  bcc?: EmailParticipant[];
  subject: string;
  body: string;
  timestamp: Date;
  attachments: EmailAttachment[];
}

export interface EmailAttachment {
  id: string;
  name: string;
  size: number;
  mimeType: string;
}

export interface EmailLabel {
  id: string;
  name: string;
  type: 'system' | 'user' | 'custom';
  color?: string;
}

export interface ClassificationRule {
  id: string;
  name: string;
  description: string;
  pattern: RulePattern;
  labels: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RulePattern {
  type: 'graph' | 'text' | 'regex' | 'ai';
  nodes: GraphNode[];
  edges: GraphEdge[];
  conditions: RuleCondition[];
}

export interface GraphNode {
  id: string;
  type: 'person' | 'project' | 'topic' | 'company';
  name: string;
  properties: Record<string, unknown>;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: string;
  properties: Record<string, unknown>;
}

export interface RuleCondition {
  field: string;
  operator: 'equals' | 'contains' | 'regex' | 'ai_match';
  value: string;
}

export interface ClassificationResult {
  threadId: string;
  labels: EmailLabel[];
  confidence: number;
  reasoning: string;
  appliedAt: Date;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  metadata?: Record<string, unknown>;
}

export interface AppSettings {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
  autoClassification: boolean;
  apiEndpoint: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  preferences: AppSettings;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Service types
export interface ClassificationService {
  classifyThread(threadId: string): Promise<ClassificationResult>;
  classifyBulk(threadIds: string[]): Promise<ClassificationResult[]>;
  createRule(rule: Omit<ClassificationRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<ClassificationRule>;
  updateRule(id: string, rule: Partial<ClassificationRule>): Promise<ClassificationRule>;
  deleteRule(id: string): Promise<void>;
  getRules(): Promise<ClassificationRule[]>;
}

export interface ChatService {
  sendMessage(message: string): Promise<ChatMessage>;
  getHistory(): Promise<ChatMessage[]>;
  clearHistory(): Promise<void>;
}

export interface GmailService {
  getThread(threadId: string): Promise<EmailThread>;
  getThreads(query?: string): Promise<EmailThread[]>;
  applyLabels(threadId: string, labelIds: string[]): Promise<void>;
  getLabels(): Promise<EmailLabel[]>;
}

// Store types
export interface AppState {
  user: User | null;
  settings: AppSettings;
  theme: 'light' | 'dark';
  isLoading: boolean;
  error: string | null;
}

export interface AppActions {
  setUser: (user: User | null) => void;
  setSettings: (settings: Partial<AppSettings>) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export type AppStore = AppState & AppActions;