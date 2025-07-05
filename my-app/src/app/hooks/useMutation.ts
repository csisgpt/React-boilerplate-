import { useState } from 'react';
import axios from '@/app/config/axios';

export function useMutation<T, U>(url: string) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function mutate(data: T): Promise<U | null> {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post<U>(url, data);
      return res.data;
    } catch (e: any) {
      setError(e);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { mutate, isLoading, error };
}
