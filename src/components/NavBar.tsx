import SearchBar from './SearchBar';
import { useTheme } from './ThemeProvider';
import { HiOutlineComputerDesktop, HiMoon } from 'react-icons/hi2';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="z-20 flex h-[60px] items-center  lg:justify-between gap-4 border-b bg-default px-4  sm:px-6 lg:px-8 border-default">
      <img
        src="/logo.webp"
        alt="Gamehub"
        className="flex  cursor-pointer mt-px max-md-gutters:mt-0 h-12"
      />

      <SearchBar onSearch={(searchText) => onSearch(searchText)} />
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            theme === 'light' ? setTheme('dark') : setTheme('light');
          }}
          className="inline-flex text-zinc-300 outline-blue-500 hover:text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-400"
        >
          {theme === 'system' ? (
            <HiOutlineComputerDesktop className="size-6" />
          ) : theme === 'light' ? (
            <HiMoon className="size-6" />
          ) : (
            <HiMoon className="size-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
