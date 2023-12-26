import { Game } from '../hooks/useGames';
import { Card, CardFooter, CardHeader } from './ui/card';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <img src={game.background_image} alt="Game" />
      <CardFooter>
        <CardHeader>{game.name}</CardHeader>
      </CardFooter>
    </Card>
    // <div className="border border-solid border-default rounded-md overflow-hidden focus:shadow-xs hover:shadow-xs">
    //   <img src={game.background_image} alt="Game Image" />
    //   <div className="">
    //     <h2 className="text-2xl">{game.name}</h2>
    //   </div>
    // </div>
  );
};

export default GameCard;
