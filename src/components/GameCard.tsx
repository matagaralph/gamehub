import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import { Card, CardContent, CardHeader } from './ui/card';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <img src={game.background_image} alt="Game" />
      <CardContent>
        <CardHeader className="mt-3">{game.name}</CardHeader>
        <div className="flex mt-1 space-x-1.5">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
