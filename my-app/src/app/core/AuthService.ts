import { REFRESH_URL } from '@app/config';

export interface User {
  id: string;
  email: string;
  roles: string[];
}

/**
 * Authentication service handling tokens and role checks.
 */
export class AuthService {
  private accessKey = 'app_access_token';
  private refreshKey = 'app_refresh_token';
  private roleKey = 'user_roles';

  private constructor() {}
  static instance = new AuthService();

  /** Perform login and persist tokens */
  async login(credentials: { email: string; password: string }): Promise<User> {
    const res = await fetch(REFRESH_URL.replace('/refresh', '/login'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    this.storeTokens(data.accessToken, data.refreshToken);
    if (data.user?.roles) {
      localStorage.setItem(this.roleKey, JSON.stringify(data.user.roles));
    }
    return data.user as User;
  }

  /** Clear tokens from storage */
  logout(): void {
    localStorage.removeItem(this.accessKey);
    localStorage.removeItem(this.refreshKey);
    localStorage.removeItem(this.roleKey);
  }

  /** Get stored access token */
  getAccessToken(): string | null {
    return localStorage.getItem(this.accessKey);
  }

  /** Get stored refresh token */
  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshKey);
  }

  /** Refresh the access token */
  async refreshToken(): Promise<string> {
    const token = this.getRefreshToken();
    if (!token) throw new Error('No refresh token');

    const res = await fetch(REFRESH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken: token }),
    });

    if (!res.ok) {
      throw new Error('Refresh failed');
    }
    const data = await res.json();
    this.storeTokens(data.accessToken, data.refreshToken ?? token);
    return data.accessToken as string;
  }

  /** Determine if user is authenticated */
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  /** Check if user has the specified role */
  hasRole(role: string): boolean {
    const raw = localStorage.getItem(this.roleKey);
    const roles: string[] = raw ? JSON.parse(raw) : [];
    return roles.includes(role);
  }

  /** Persist tokens in local storage */
  private storeTokens(access: string, refresh: string) {
    localStorage.setItem(this.accessKey, access);
    localStorage.setItem(this.refreshKey, refresh);
  }
}
