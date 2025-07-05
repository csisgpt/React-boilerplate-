/**
 * Read a required environment variable.
 *
 * @param key - Name of the environment variable
 * @returns The value of the variable
 * @throws Error if the variable is not set
 */
export function getEnv(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error('Missing env var: ' + key);
  }
  return value;
}

/** Base API URL configured via environment variables */
export const API_URL = getEnv('VITE_APP_API_URL');

/** URL used to refresh authentication tokens */
export const REFRESH_URL = getEnv('VITE_APP_REFRESH_TOKEN_URL');
