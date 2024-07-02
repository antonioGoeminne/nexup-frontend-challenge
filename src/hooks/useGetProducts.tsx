import { type Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

const productList: Product[] = [
  {
    id: 1,
    name: 'Banana',
    price: 1000,
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
  },
  {
    id: 2,
    name: 'Manzana',
    price: 1000,
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
  },
  {
    id: 3,
    name: 'Bife',
    price: 23500,
    status: ProductStatus.Inactive,
    category: ProductCategory.Meat,
  },
  {
    id: 4,
    name: 'Brocolí',
    price: 40000,
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
  },
];

interface UseGetProductsProps {
  filter: string;
}

interface UseGetProducts {
  productList: Product[];
}

export const useGetProducts = ({
  filter,
}: UseGetProductsProps): UseGetProducts => {
  if (!filter || filter === 'Todos') return { productList };

  const filteredProducts = productList.filter((pr) => pr.category === filter);

  return { productList: filteredProducts };
};
