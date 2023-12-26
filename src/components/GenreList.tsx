import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul className="mt-6">
      {genres.map((g) => (
        <li className="text-default" key={g.id}>
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
