import { useEffect, useState } from 'react';
import { type Product } from '../models/Product';
import { getProductList } from '../api/products';
import { formatString } from '../lib/formatString';

interface UseGetProductsProps {
  filter: string;
  searchValue: string | undefined;
}

interface UseGetProducts {
  productList: Product[];
  isLoading: boolean;
}

const processFilterSearch = (
  data: Product[],
  searchValue: string | undefined,
) => {
  if (!searchValue || !data || !data?.length) return data;

  const formattedSearchValue = formatString(searchValue);

  return data.filter(
    (product) =>
      formatString(product.name).includes(formattedSearchValue) ||
      formatString(product.name).startsWith(formattedSearchValue) ||
      formatString(product.category).includes(formattedSearchValue) ||
      formatString(product.category).startsWith(formattedSearchValue),
  );
};

export const useGetProducts = ({
  filter,
  searchValue,
}: UseGetProductsProps): UseGetProducts => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const productsWithStock = productList.filter((product) => product.stock > 0);

  useEffect(() => {
    setIsLoading(true);
    const timeId = setTimeout(() => {
      setProductList(getProductList().filter((product) => product.stock > 0));
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeId);
  }, []);

  if (!filter || filter === 'Todos')
    return {
      productList: processFilterSearch(productsWithStock, searchValue),
      isLoading,
    };

  const filteredProducts = processFilterSearch(
    productsWithStock,
    searchValue,
  ).filter((pr) => pr.category === filter);

  return { productList: filteredProducts, isLoading };
};
