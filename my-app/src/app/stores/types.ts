export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
}
export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  roles: string[];
  isLoading: boolean;
  error: string | null;
  login: (creds: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  setTokens: (access: string, refresh: string, user: User, roles: string[]) => void;
}
export interface UiState {
  sidebarOpen: boolean;
  language: string;
  toggleSidebar: () => void;
  setLanguage: (lang: string) => void;
}
export interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}
export interface NotificationState {
  notifications: Notification[];
  enqueue: (n: Omit<Notification, 'id'>) => void;
  dequeue: (id: string) => void;
}
export interface ModalProps {
  title: string;
  content: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}
export interface ModalState {
  openModals: Record<string, ModalProps>;
  openModal: (key: string, props: ModalProps) => void;
  closeModal: (key: string) => void;
}
export interface FormWizardState {
  step: number;
  data: Record<string, any>;
  nextStep: () => void;
  prevStep: () => void;
  setData: (partial: Record<string, any>) => void;
}
export interface DataCacheEntry<T> {
  data?: T;
  isLoading: boolean;
  error?: string;
}
export interface DataCacheState {
  cache: Record<string, DataCacheEntry<any>>;
  fetchData: <T>(key: string, fetcher: () => Promise<T>) => Promise<void>;
  invalidate: (key: string) => void;
}
export interface PaginationState {
  page: number;
  pageSize: number;
  filters: Record<string, any>;
  sort: { field: string; direction: 'asc' | 'desc' } | null;
  setPage: (p: number) => void;
  setPageSize: (s: number) => void;
  setFilters: (f: Record<string, any>) => void;
  setSort: (field: string, direction: 'asc' | 'desc') => void;
}
export interface NetworkState {
  online: boolean;
}
export interface CartItem {
  id: string;
  quantity: number;
  price: number;
}
export interface CartState {
  items: CartItem[];
  addItem: (i: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, q: number) => void;
  clearCart: () => void;
  total: () => number;
}
export interface FeatureToggleState {
  flags: Record<string, boolean>;
  isEnabled: (key: string) => boolean;
  setFlag: (key: string, value: boolean) => void;
}
export interface BreadcrumbItem {
  label: string;
  href?: string;
}
export interface BreadcrumbState {
  items: BreadcrumbItem[];
  setBreadcrumb: (items: BreadcrumbItem[]) => void;
}
export interface LocalizationState {
  language: string;
  available: string[];
  setLanguage: (lang: string) => void;
}
export interface LoadingState {
  loadingKeys: string[];
  startLoading: (key: string) => void;
  stopLoading: (key: string) => void;
  isLoading: (key?: string) => boolean;
}
export interface ChatMessage {
  id: string;
  from: string;
  content: string;
  timestamp: number;
}
export interface ChatState {
  threads: Record<string, ChatMessage[]>;
  sendMessage: (threadId: string, msg: ChatMessage) => void;
  receiveMessage: (threadId: string, msg: ChatMessage) => void;
  markAsRead: (threadId: string) => void;
}
export type RootState = AuthState &
  UiState &
  ThemeState &
  NotificationState &
  ModalState &
  FormWizardState &
  DataCacheState &
  PaginationState &
  NetworkState &
  CartState &
  FeatureToggleState &
  BreadcrumbState &
  LocalizationState &
  LoadingState &
  ChatState;
