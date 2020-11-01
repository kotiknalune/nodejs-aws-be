import createEvent from '@serverless/event-mocks';

import productService from '../src/resources/products/product.service';
import { response } from '../src/constants/response';
import { getProductById } from '../handlers/getProductById';

describe('getProductById.handler', () => {
  describe('if id provided in path', () => {
    test('should return product by its id', async () => {
      const mockEvent = createEvent('aws:apiGateway', {
        pathParameters: {
          id: '1',
        },
      } as any);

      const mockProduct: Product = {
        id: '123',
        name: 'test',
        description: 'test',
        price: 20,
      };

      productService.getById = jest.fn().mockReturnValue(mockProduct);
      const result = await getProductById(mockEvent);
      expect(result).toEqual(response(mockProduct, 200));
    });
  });

  describe('if id is not provided in path', () => {
    test('should return bad request result', async () => {
      const mockEvent = createEvent('aws:apiGateway', {
        pathParameters: {},
      } as any);

      expect(await getProductById(mockEvent)).toEqual(response({ message: 'Please provide an ID' }, 400));
    });
  });
});
