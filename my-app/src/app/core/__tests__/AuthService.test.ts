import { AuthService } from '../AuthService';

const fetchMock = jest.fn();

(global as any).fetch = fetchMock;

describe('AuthService', () => {
  beforeEach(() => {
    fetchMock.mockReset();
    localStorage.clear();
  });

  it('login stores tokens and returns user', async () => {
    fetchMock.mockResolvedValue({
      json: () =>
        Promise.resolve({
          accessToken: 'a',
          refreshToken: 'b',
          user: { id: '1', email: 'e', roles: ['admin'] },
        }),
    });
    const user = await AuthService.instance.login({ email: 'e', password: 'p' });
    expect(user.email).toBe('e');
    expect(localStorage.getItem('app_access_token')).toBe('a');
  });

  it('logout clears storage', () => {
    localStorage.setItem('app_access_token', 'x');
    AuthService.instance.logout();
    expect(localStorage.getItem('app_access_token')).toBeNull();
  });

  it('refreshToken replaces token', async () => {
    localStorage.setItem('app_refresh_token', 'old');
    fetchMock.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ accessToken: 'new', refreshToken: 'r' }),
    });
    const token = await AuthService.instance.refreshToken();
    expect(token).toBe('new');
    expect(localStorage.getItem('app_access_token')).toBe('new');
  });

  it('isAuthenticated works', () => {
    expect(AuthService.instance.isAuthenticated()).toBe(false);
    localStorage.setItem('app_access_token', 'x');
    expect(AuthService.instance.isAuthenticated()).toBe(true);
  });

  it('hasRole checks roles', () => {
    localStorage.setItem('user_roles', JSON.stringify(['admin']));
    expect(AuthService.instance.hasRole('admin')).toBe(true);
    expect(AuthService.instance.hasRole('user')).toBe(false);
  });
});
