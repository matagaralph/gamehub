import { useEffect, useState } from 'react';
import apiClient from '../services/api-Client';
import { Text } from './ui/text';

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<GamesResponse>('/gamess')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li className="text-default" key={game.id}>
            {game.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
