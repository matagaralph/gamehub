// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
//TODO: Fix type inference issue line: 33

import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { Input } from '@headlessui/react';
import { useRef } from 'react';
import cn from '../lib/utils';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-1 lg:flex-initial gap-x-4  self-stretch lg:self-center lg:gap-x-6">
      <form
        className="relative flex flex-1"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <HiOutlineMagnifyingGlass
          className="pointer-events-none absolute inset-y-0 left-0 h-full size-5 text-zinc-400 dark:text-zinc-300"
          aria-hidden="true"
        />
        <Input
          ref={ref}
          id="search-field"
          className={cn(
            'block  w-full border-0 py-0 pl-8 pr-0 sm:text-sm',
            'text-base/6 text-default placeholder:text-zinc-500 sm:text-sm/6 ',
            // Hide default focus styles
            'focus:outline-none',
            'bg-default'
          )}
          placeholder="Search games...."
          type="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
