import productRepo from './product.repository';

const getAll = async (): Promise<Product[]> => {
  const products: Product[] = await productRepo.getAll();
  return products;
};
 
const getById = async (id: number) : Promise<Product> => {
  const product: Product = await productRepo.getById(id);
  return product;
};

export default {
  getAll, getById
};
