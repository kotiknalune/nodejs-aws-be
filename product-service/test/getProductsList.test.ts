
import productService from '../src/resources/products/product.service';
import { response } from '../src/constants/response';
import { getProductsList } from '../handlers/getProductsList';

describe('getProductsList.handler', () => {
  test('should return all products', async () => {
    const mockProducts: Product[] = [
      {
        id: 0,
        name: 'List test',
        description: 'List test',
        price: 40,
      },
    ];

    productService.getAll = jest.fn().mockReturnValue(mockProducts);
    expect(await getProductsList()).toEqual(response(mockProducts, 200));
  });

  test('should return internal server error in case of failing extracting products', async () => {
    productService.getAll = jest.fn(() => {
      throw new Error('');
    });
    expect(await getProductsList()).toEqual(response({ message: 'Internal Server Error' }, 500));
  });
});
