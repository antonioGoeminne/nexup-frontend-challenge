import React from 'react';
import { Product } from '../models/Product';
import '../styles/ProductItem.css';
import { colors } from '../config/commons';
import { numberWithCommas } from '../lib/numberWithCommas';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { name, status, category, price, stock } = product;

  return (
    <div className="productItem">
      <div>
        <p className="productName">{name}</p>
        <p className="category">{category}</p>
        <p className="category">{stock}u</p>
      </div>
      <div>
        <p style={{ color: colors[status] }}>{status}</p>
        <p className="price">{numberWithCommas(price)} $</p>
      </div>
    </div>
  );
};
