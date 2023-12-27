import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '../components/ui/dropdown';
import { HiChevronDown } from 'react-icons/hi2';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatforms();
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
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default PlatformSelector;
