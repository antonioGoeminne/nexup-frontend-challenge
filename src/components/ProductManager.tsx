import React from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';
import '../styles/ProductList.css';

import { useFilter } from '../hooks/useFilter';
import { useGetProducts } from '../hooks/useGetProducts';

export const ProductManager: React.FC = () => {
  const { filter, handleFilter } = useFilter();
  const { productList, isLoading } = useGetProducts({ filter });

  return (
    <div className="wrapper">
      <CategoryFilter handleFilter={handleFilter} />
      <ProductList isLoading={isLoading} productList={productList} />
    </div>
  );
};
