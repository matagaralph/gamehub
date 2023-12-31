import { HiChevronDown } from 'react-icons/hi2';
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from './ui/dropdown';
import useGameQueryStore from '../store';

const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average rating' },
];

const SortSelector = () => {
  const setSelectedOrderId = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.label === sortOrder
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
            onClick={() => setSelectedOrderId(order.value)}
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
