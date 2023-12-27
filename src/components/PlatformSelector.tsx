import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '../components/ui/dropdown';
import { HiChevronDown } from 'react-icons/hi2';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
  const { data } = usePlatforms();
  return (
    <Dropdown>
      <DropdownButton outline>
        Platforms
        <HiChevronDown />
      </DropdownButton>
      <DropdownMenu>
        {data.map((p) => (
          <DropdownItem href="#">{p.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default PlatformSelector;
