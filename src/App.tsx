import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-row flex-1">
        <aside className="p-4 w-[320px] h-dvh relative lg:flex hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="text-2xl font-semibold text-default">Genres</h3>
            <GenreList />
          </div>
        </aside>
        <main className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex-1">
          <GameGrid />
        </main>
      </div>
    </>
  );
};

export default App;
