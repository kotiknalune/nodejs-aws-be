import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import * as productList from '../common/productList.json';
import { StatusCodes } from 'http-status-codes';

import { headersGet } from '../config/headers.config.js';

export const getProductsList = async (event, _context) => {
  console.log('Lambda invocation with event: ', event);

  const allProducts = JSON.stringify(productList);
  const response = (allProducts) ? allProducts : 'No products found!'; 

  return {
    statusCode: (!allProducts) ? StatusCodes.NOT_FOUND : StatusCodes.OK,
    headers: headersGet,
    body: response
  };
}
