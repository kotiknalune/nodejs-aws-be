import { APIGatewayProxyHandler, APIGatewayProxyEvent } from 'aws-lambda';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import 'source-map-support/register';

import productsService from '../src/resources/products/product.service';
import { response } from '../src/constants/response';

export const getProductById = async (event: APIGatewayProxyEvent) => {
  try {
    const { id } = event?.pathParameters || {};
    if (!id) return response({ message: 'Please provide an ID' }, StatusCodes.BAD_REQUEST);

    const product: Product = await productsService.getById(id);
    if (product) return response(product, StatusCodes.OK);

    return {
      statusCode: StatusCodes.NO_CONTENT,
      body: JSON.stringify(null),
    };

  } catch (err) {
    // console.error('Error while executing lambda', err);
    return response({message: ReasonPhrases.INTERNAL_SERVER_ERROR }, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const handler: APIGatewayProxyHandler = async event => getProductById(event);