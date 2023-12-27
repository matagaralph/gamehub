import { HiChevronDown } from 'react-icons/hi2';
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from './ui/dropdown';

const SortSelector = () => {
  return (
    <Dropdown>
      <DropdownButton outline>
        Order By: Revelance
        <HiChevronDown />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem>Name</DropdownItem>
        <DropdownItem>Date added</DropdownItem>
        <DropdownItem>Release date</DropdownItem>
        <DropdownItem>Popularity</DropdownItem>
        <DropdownItem>Average rating</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default SortSelector;
