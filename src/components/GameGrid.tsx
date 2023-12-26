import { Text } from './ui/text';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { games, error } = useGames();

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
