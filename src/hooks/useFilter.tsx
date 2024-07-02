import { useState } from 'react';
import { useEvent } from './useEvent';
import { ChangeEventType } from '../types/helpers';
import { ProductCategory } from '../models/ProductCategory';

type Filter = 'Todos' | ProductCategory;

interface UseFilter {
  filter: Filter;
  handleFilter: ChangeEventType;
}

export const useFilter = (): UseFilter => {
  const [filter, setFilter] = useState<Filter>('Todos');

  const handleFilter = useEvent((e) => {
    const { value } = e.target;
    setFilter(value);
  });

  return { filter, handleFilter };
};
