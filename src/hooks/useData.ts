import { useState, useEffect } from 'react';
import apiClient from '../services/api-Client';
import { CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setIsLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err.message);
      });

    () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
