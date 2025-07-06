import { render } from '@testing-library/react';
import { AuthGuard } from '../AuthGuard';
import { useAuthStore } from '@app/stores/useAuthStore';

describe('AuthGuard', () => {
  beforeEach(() => {
    useAuthStore.setState({ accessToken: null, refreshToken: null, user: null, roles: [], isLoading: false, error: null }, true);
  });

  it('renders children when authenticated', () => {
    useAuthStore.getState().setTokens('a','r',{ id:'1', name:'u', email:'e', roles:[] }, []);
    const { getByText } = render(<AuthGuard>Hi</AuthGuard>);
    expect(getByText('Hi')).toBeInTheDocument();
  });

  it('redirects when unauthenticated', () => {
    const assign = jest.fn();
    delete (window as any).location;
    (window as any).location = { assign };
    render(<AuthGuard redirectTo="/login">Hi</AuthGuard>);
    expect(assign).toHaveBeenCalledWith('/login');
  });
});
