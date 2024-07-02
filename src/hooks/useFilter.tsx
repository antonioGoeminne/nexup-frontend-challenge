import { useState } from 'react';
import { useEvent } from './useEvent';
import { ChangeEventType, type ChangeEventHandler } from '../types/helpers';
import { ProductCategory } from '../models/ProductCategory';

type Filter = 'Todos' | ProductCategory;

interface UseFilter {
  filter: Filter;
  searchValue: string | undefined;
  handleFilter: ChangeEventType;
  handleSearch: ChangeEventHandler;
}

export const useFilter = (): UseFilter => {
  const [filter, setFilter] = useState<Filter>('Todos');
  const [searchValue, setSearchValue] = useState<string | undefined>();

  const handleFilter = useEvent((e) => {
    const { value } = e.target;
    setFilter(value);
  });

  const handleSearch = useEvent((e) => {
    const { value } = e.target;
    setSearchValue(value);
  });

  return { filter, handleFilter, searchValue, handleSearch };
};
