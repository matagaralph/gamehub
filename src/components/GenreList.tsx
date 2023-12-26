import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul className="mt-6">
      {data.map((g) => (
        <li className="text-default" key={g.id}>
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
