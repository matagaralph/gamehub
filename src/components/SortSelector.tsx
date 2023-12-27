import { HiChevronDown } from 'react-icons/hi2';
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from './ui/dropdown';

interface Props {
  onSelectOrder: (order: string) => void;
  sortOrder: string;
}

const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average rating' },
];

const SortSelector = ({ onSelectOrder, sortOrder }: Props) => {
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Dropdown>
      <DropdownButton outline className="shrink-0">
        Sort: {currentSortOrder?.label || 'Relevance'}
        <HiChevronDown />
      </DropdownButton>
      <DropdownMenu>
        {sortOrders.map((order) => (
          <DropdownItem
            onClick={() => onSelectOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SortSelector;
