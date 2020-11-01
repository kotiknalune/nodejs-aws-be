import { APIGatewayProxyHandler, APIGatewayProxyEvent } from 'aws-lambda';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import 'source-map-support/register';

import productsService from '../src/resources/products/product.service';
import { response } from '../src/constants/response';

export const getProductById = async (event: APIGatewayProxyEvent) => {  
  try {
    const { pathParameters: { productId } } = event;
    if (!productId) return response({ message: 'Please provide an ID' }, StatusCodes.BAD_REQUEST);

    const product: Product = await productsService.getById(Number(productId));
    if (product) return response(product, StatusCodes.OK);

    return response({message: ReasonPhrases.NO_CONTENT }, StatusCodes.NO_CONTENT);

  } catch (err) {
    return response({message: ReasonPhrases.INTERNAL_SERVER_ERROR }, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const handler: APIGatewayProxyHandler = async event => getProductById(event);