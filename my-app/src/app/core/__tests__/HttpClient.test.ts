import HttpClient from '../HttpClient';
import { AuthService } from '../AuthService';
import { ApiError } from '../ApiError';

jest.mock('../AuthService');

function createMockInstance() {
  const handlers: any = {};
  const instance: any = {
    interceptors: {
      request: { use: jest.fn((fn: any) => (handlers.req = fn)) },
      response: { use: jest.fn((res: any, err: any) => {
        handlers.res = res;
        handlers.err = err;
      }) },
    },
    get: jest.fn(() => Promise.resolve({ data: 'ok' })),
  };
  return { instance, handlers };
}

describe('HttpClient', () => {
  it('adds Authorization header', async () => {
    (AuthService.instance.getAccessToken as jest.Mock).mockReturnValue('t');
    const { instance, handlers } = createMockInstance();
    const client = new HttpClient(instance);
    const config = await handlers.req({ headers: {} });
    expect(config.headers.Authorization).toBe('Bearer t');
    expect(instance.interceptors.request.use).toHaveBeenCalled();
    client; // satisfy unused variable
  });

  it('wraps errors as ApiError', async () => {
    const { instance, handlers } = createMockInstance();
    instance.get.mockRejectedValue({
      config: {},
      response: { status: 500, data: { message: 'fail' } },
    });
    const client = new HttpClient(instance);

    try {
      await handlers.err({
        config: {},
        response: { status: 500, data: { message: 'fail' } },
        message: 'fail',
      });
    } catch (e) {
      expect(e).toBeInstanceOf(ApiError);
      expect((e as ApiError).status).toBe(500);
    }

    client; // satisfy unused variable
  });
});
