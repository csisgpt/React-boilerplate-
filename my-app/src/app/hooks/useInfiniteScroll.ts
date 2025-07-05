import { useState, useEffect } from 'react';
import axios from '@/app/config/axios';

export function useInfiniteScroll<T>(url: string, pageSize: number) {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    axios
      .get<T[]>(url, { params: { page, pageSize } })
      .then(r => {
        if (!cancelled) {
          setData(prev => [...prev, ...r.data]);
          setHasMore(r.data.length === pageSize);
        }
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [page, pageSize, url]);

  const loadMore = () => {
    if (hasMore && !isLoading) setPage(p => p + 1);
  };

  return { data, isLoading, hasMore, loadMore };
}
