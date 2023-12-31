import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenres().data.find((genre) => genre.id === genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useGenres().data.find((genre) => genre.id === platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <h2 className="text-2xl font-semibold my-5 text-default">{heading}</h2>
  );
};

export default GameHeading;
