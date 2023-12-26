import useGenres from '../hooks/useGenres';
import getCroppedImage from '../services/image-url';
import { Text } from './ui/text';
import { FiLoader } from 'react-icons/fi';

const GenreList = () => {
  const { data, isLoading } = useGenres();

  if (isLoading)
    return (
      <FiLoader className="animate-spin size-8 text-default text-center mt-6" />
    );
  return (
    <ul className="mt-6 list-none">
      {data.map((g) => (
        <li className="py-2" key={g.id}>
          <div className="flex gap-2.5">
            <img
              src={getCroppedImage(g.image_background)}
              alt={g.name}
              className="size-9 rounded-md"
            />
            <Text className="text-lg">{g.name}</Text>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
