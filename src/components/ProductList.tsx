import React from 'react';
import { Product } from '../models/Product';
import { ProductItem } from './ProductItem';
import '../styles/ProductList.css';

interface ProductListProps {
  productList: Product[];
  isLoading: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({
  productList,
  isLoading,
}) => {
  if (isLoading) return <p>Cargando...</p>;

  if (!productList) return null;

  return (
    <div className="wrapper">
      {(productList || []).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
