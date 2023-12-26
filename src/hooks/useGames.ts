import { useState, useEffect } from 'react';
import apiClient from '../services/api-Client';
import { CanceledError } from 'axios';

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const controller = new AbortController();

  useEffect(() => {
    apiClient
      .get<GamesResponse>('/games', { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;