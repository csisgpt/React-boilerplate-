import { useEffect, useState } from 'react';
import axios from '@/app/config/axios';

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios.get<T>(url).then(r => setData(r.data));
  }, [url]);

  return data;
}
