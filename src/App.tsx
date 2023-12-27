import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import { Genre } from './hooks/useGenres';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
                  selectedGenre={selectedGenre}
                  onSelectGenre={(genre) => setSelectedGenre(genre)}
                />
              </li>
            </ul>
          </aside>
          <main className="min-w-0 lg:px-8 flex-1 gap-x-12 pb-16 pt-8 lg:pt-12">
            <div className="mb-6">
              <PlatformSelector />
            </div>
            <GameGrid selectedGenre={selectedGenre} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
