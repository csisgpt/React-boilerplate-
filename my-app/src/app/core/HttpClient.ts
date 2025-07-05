import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { API_URL } from '@app/config';
import { AuthService } from './AuthService';
import { ApiError } from './ApiError';

/**
 * Typed HTTP client wrapper around Axios.
 */
export default class HttpClient {
  private instance: AxiosInstance;

  constructor(instance?: AxiosInstance) {
    this.instance =
      instance ??
      axios.create({
        baseURL: API_URL,
        timeout: 30000,
      });

    this.instance.interceptors.request.use(this.onRequest.bind(this));
    this.instance.interceptors.response.use(
      this.onResponse.bind(this),
      this.onError.bind(this),
    );
  }

  /** Attach auth token to outgoing requests */
  private onRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    const token = AuthService.instance.getAccessToken();
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }

  private onResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  /**
   * Handle errors and perform retries or token refresh when needed.
   */
  private async onError(error: AxiosError): Promise<never> {
    const { config, response } = error;
    const status = response?.status ?? 0;

    // handle 401 by refreshing token once
    if (status === 401 && config && !('retry' in config)) {
      (config as any).retry = true;
      await AuthService.instance.refreshToken();
      const token = AuthService.instance.getAccessToken();
      if (token && config.headers) {
        (config.headers as any).Authorization = `Bearer ${token}`;
      }
      return this.instance(config);
    }

    // retry network/5xx errors up to two times
    if (config) {
      const retryCount = (config as any)._retryCount ?? 0;
      if ((!response || status >= 500) && retryCount < 2) {
        (config as any)._retryCount = retryCount + 1;
        const delay = 300 * Math.pow(2, retryCount);
        await new Promise(res => setTimeout(res, delay));
        return this.instance(config);
      }
    }

    // throw standardized ApiError
    const message =
      (response?.data as any)?.message || error.message || 'Request failed';
    throw new ApiError({ status, message, details: response?.data });
  }

  // HTTP verb helpers
  /** Perform HTTP GET */
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get<T, T>(url, config);
  }

  /** Perform HTTP POST */
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post<T, T>(url, data, config);
  }

  /** Perform HTTP PUT */
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.put<T, T>(url, data, config);
  }

  /** Perform HTTP PATCH */
  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.patch<T, T>(url, data, config);
  }

  /** Perform HTTP DELETE */
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete<T, T>(url, config);
  }
}
