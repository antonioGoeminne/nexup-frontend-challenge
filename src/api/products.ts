import { type Product } from '../models/Product';
import { ProductStatus } from '../models/ProductStatus';
import { ProductCategory } from '../models/ProductCategory';

const productList: Product[] = [
  {
    id: 1,
    name: 'Banana',
    price: 1000,
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    stock: 10,
  },
  {
    id: 2,
    name: 'Manzana',
    price: 1000,
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    stock: 4,
  },
  {
    id: 3,
    name: 'Bife',
    price: 23500,
    status: ProductStatus.Inactive,
    category: ProductCategory.Meat,
    stock: 7,
  },
  {
    id: 4,
    name: 'Brocolí',
    price: 40000,
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    stock: 2,
  },
  {
    id: 4,
    name: 'Pepino',
    price: 40000,
    status: ProductStatus.Active,
    category: ProductCategory.Vegetables,
    stock: 0,
  },
];

// Change the return type if necessary
export const getProductList = (): Product[] => {
  return productList;
};
