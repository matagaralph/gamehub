import { useState, useEffect } from 'react';
import apiClient from '../services/api-Client';
import { CanceledError } from 'axios';

export interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<GenreResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setIsLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err.message);
      });

    () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
