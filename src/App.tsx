import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-row flex-1">
        <aside className="p-4 w-[280px] h-dvh relative lg:flex hidden">
          SideBar
        </aside>
        <main className="px-4 sm:px-6 lg:px-8 pt-8 flex-1">
          <GameGrid />
        </main>
      </div>
    </>
  );
};

export default App;
