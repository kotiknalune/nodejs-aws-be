import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import * as productList from '../../common/productList.json';

import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { headersGet } from '../config/headers.config';

import axios from 'axios'

// Async/await for crosscheck purposes
const getCovidInfo = async () => {
  const COVID_API_URL = 'https://api.covid19api.com/summary'
  try {
    const res = await axios.get(`${COVID_API_URL}`);
    return res;
  } catch (error) {
    return {
      message: 'Unable to get global Covid-19 info'
    }
  }
}

export const getProductById = async (event, _context) => {
  const { pathParameters: { productId } } = event;

  const covidData = await getCovidInfo();

  const filterProductsById = productList.filter((product) => product.id === productId);

  if (filterProductsById.length === 1) {
      return {
          statusCode: StatusCodes.OK,
          headers: headersGet,
          body: JSON.stringify(filterProductsById[0]),
      }
  } else if (filterProductsById.length > 1) {
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      body: ReasonPhrases.INTERNAL_SERVER_ERROR
    }
  }

  return {
    statusCode: StatusCodes.NOT_FOUND,
    body: 'Product not found!',
    covid: covidData.Global
  }
  
}  

