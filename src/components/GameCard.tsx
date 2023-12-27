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
        <div className="flex mt-4 mb-3 justify-between">
          <div className="space-x-1.5">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <CriticScore score={game.metacritic} />
        </div>
        <CardHeader>{capitalize(game.name)}</CardHeader>
      </CardContent>
    </Card>
  );
};

export default GameCard;
