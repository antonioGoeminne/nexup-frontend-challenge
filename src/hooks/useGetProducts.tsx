import { useEffect, useState } from 'react';
import { type Product } from '../models/Product';
import { getProductList } from '../api/products';

interface UseGetProductsProps {
  filter: string;
}

interface UseGetProducts {
  productList: Product[];
  isLoading: boolean;
}

export const useGetProducts = ({
  filter,
}: UseGetProductsProps): UseGetProducts => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const timeId = setTimeout(() => {
      setProductList(getProductList);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeId);
  }, []);

  if (!filter || filter === 'Todos') return { productList, isLoading };

  const filteredProducts = productList.filter((pr) => pr.category === filter);

  return { productList: filteredProducts, isLoading };
};
