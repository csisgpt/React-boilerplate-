import type { Meta, StoryObj } from '@storybook/react';
import { AuthGuard } from './AuthGuard';
import { useAuthStore } from '@app/stores/useAuthStore';

const meta: Meta<typeof AuthGuard> = {
  title: 'global/AuthGuard',
  component: AuthGuard,
  args: { children: 'Protected' },
};
export default meta;

export const LoggedIn: StoryObj<typeof AuthGuard> = {
  render: (args) => {
    useAuthStore.getState().setTokens('a','r',{ id:'1', name:'u', email:'e', roles:[] }, []);
    return <AuthGuard {...args} />;
  },
};

export const LoggedOut: StoryObj<typeof AuthGuard> = {};
