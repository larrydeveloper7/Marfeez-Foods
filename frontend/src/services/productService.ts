import { dummyProducts, Product } from '../data/dummyProducts';

export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyProducts);
    }, 500);
  });
};
