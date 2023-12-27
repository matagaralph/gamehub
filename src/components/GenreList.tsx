import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImage from '../services/image-url';
import { FiLoader } from 'react-icons/fi';
import { Link } from './ui/link';
import cn from '../lib/utils';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading)
    return (
      <FiLoader className="animate-spin size-8 text-default text-center mt-6" />
    );
  return (
    <ul
      role="list"
      className="mt-4 space-y-3.5 border-zinc-200 dark:border-zinc-800"
    >
      {data.map((genre) => (
        <li key={genre.id}>
          <Link
            href="#"
            onClick={() => onSelectGenre(genre)}
            className={cn(
              'relative inline-flex text-sm/6 gap-3 items-center hover:text-zinc-950 text-secondary dark:hover:text-white',
              genre.id === selectedGenre?.id ? 'font-semibold' : 'font-normal'
            )}
          >
            <img
              src={getCroppedImage(genre.image_background)}
              alt={genre.name}
              className="size-9 rounded-md"
            />
            {genre.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
