import { APIGatewayProxyHandler } from 'aws-lambda';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import 'source-map-support/register';

import { response } from '../src/constants/response';
import productsService from '../src/resources/products/product.service';

export const getProductsList = async () => {
  try {
    const products: Product[] = await productsService.getAll();
    return response(products, StatusCodes.OK);
  } catch (err) {
    return response({ message: ReasonPhrases.INTERNAL_SERVER_ERROR }, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const handler: APIGatewayProxyHandler = async () => getProductsList();