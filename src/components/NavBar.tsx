import { useTheme } from './ThemeProvider';
import { Switch } from './ui/switch';

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky top-0 z-20 grid h-[60px] grid-cols-[1fr_auto] items-center gap-4 border-b bg-default px-4  sm:px-6 lg:px-8 border-default">
      <img
        src="/logo.webp"
        alt=""
        className="flex cursor-pointer mt-px max-md-gutters:mt-0 h-12"
      />
      <Switch
        color="teal"
        onClick={() => {
          theme === 'dark' ? setTheme('light') : setTheme('dark');
        }}
      />
    </div>
  );
};

export default NavBar;
