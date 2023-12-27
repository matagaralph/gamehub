import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  return (
    <div className="isolate">
      <NavBar />
      <div className="px-6 lg:px-8">
        <div className="mx-auto flex items-start gap-x-12 ">
          <aside className="hidden max-h-[calc(100dvh-theme(spacing.16))] w-[220px] shrink-0 overflow-y-auto pb-16 pt-12 lg:block">
            <ul role="list">
              <li>
                <h3 className="flex items-center py-1.5 text-base font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
                  Genres
                </h3>
              </li>
              <li className="mt-6">
                <GenreList
                  selectedGenre={gameQuery.genre}
                  onSelectGenre={(genre) =>
                    setGameQuery({ ...gameQuery, genre })
                  }
                />
              </li>
            </ul>
          </aside>
          <main className="min-w-0 lg:px-8 flex-1 gap-x-12 pb-16 pt-8 lg:pt-12">
            <div className="flex items-center mb-6 space-x-5">
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector />
            </div>
            <GameGrid gameQuery={gameQuery} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
