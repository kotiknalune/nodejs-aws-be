export const response = (data = {}, statusCode : number) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode,
    body: JSON.stringify(data),
  };
};



