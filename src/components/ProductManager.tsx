import React from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import '../styles/ProductList.css';

import { useFilter } from '../hooks/useFilter';
import { useGetProducts } from '../hooks/useGetProducts';
import { SearchFilter } from './SearchFilter';

export const ProductManager: React.FC = () => {
  const { filter, handleFilter, handleSearch, searchValue } = useFilter();
  const { productList, isLoading } = useGetProducts({ filter, searchValue });

  return (
    <div className="wrapper">
      <SearchFilter handleSearch={handleSearch} />
      <CategoryFilter handleFilter={handleFilter} />
      <ProductList isLoading={isLoading} productList={productList} />
    </div>
  );
};
