import { HiChevronDown } from 'react-icons/hi2';
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '../components/ui/dropdown';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = data.find((platform) => platform.id === platformId);

  return (
    <Dropdown>
      <DropdownButton outline>
        {selectedPlatform ? selectedPlatform.name : 'Platforms'}
        <HiChevronDown />
      </DropdownButton>
      <DropdownMenu>
        {data.map((platform) => (
          <DropdownItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default PlatformSelector;
