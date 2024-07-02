import React, { memo } from 'react';
import { type ChangeEventType } from '../types/helpers';
import '../styles/CategoryFilter.css';
import { ProductCategory } from '../models/ProductCategory';

interface CategoryFilterProps {
  handleFilter: ChangeEventType;
}

const Component: React.FC<CategoryFilterProps> = ({ handleFilter }) => {
  const filters = Object.values(ProductCategory);

  return (
    <select className="select" onChange={handleFilter}>
      <option value="Todos">Todos</option>
      {filters.map((filter) => (
        <option key={filter} value={filter}>
          {filter}
        </option>
      ))}
    </select>
  );
};

export const CategoryFilter = memo(Component);
