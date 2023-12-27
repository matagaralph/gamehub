import { Game } from '../hooks/useGames';
import { capitalize } from '../lib/utils';
import CriticScore from './CriticScore';
import GameCardImage from './GameCardImage';
import PlatformIconList from './PlatformIconList';
import { Card, CardContent, CardHeader } from './ui/card';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <GameCardImage url={game.background_image} />
      <CardContent>
        <CardHeader className="mt-4">{capitalize(game.name)}</CardHeader>
        <div className="flex mt-4 justify-between">
          <div className="space-x-1.5">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <CriticScore score={game.metacritic} />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
