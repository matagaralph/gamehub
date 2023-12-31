import useGenres, { Genre } from '../hooks/useGenres';
import cn from '../lib/utils';
import getCroppedImage from '../services/image-url';
import useGameQueryStore from '../store';
import { Link } from './ui/link';

const GenreList = () => {
  const { data } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <ul
      role="list"
      className="mt-4 space-y-3.5 border-zinc-200 dark:border-zinc-800"
    >
      {data.map((genre: Genre) => (
        <li key={genre.id}>
          <Link
            href="#"
            onClick={() => setSelectedGenreId(genre.id)}
            className={cn(
              'relative inline-flex text-sm/6 gap-3 items-center hover:text-zinc-950 text-secondary dark:hover:text-white',
              genre.id === selectedGenreId ? 'font-semibold' : 'font-normal'
            )}
          >
            <img
              src={getCroppedImage(genre.image_background)}
              alt={genre.name}
              className="size-9 rounded-md object-cover"
            />
            {genre.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
