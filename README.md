# Task 4
## EVALUATION CRITERIA:

Reviewers should verify the lambda functions by invoking them through provided URLs.

 1 - Task 4.1 Use AWS Console to create a database instance in RDS with PostgreSQL and default configuration

 3 - TASK 4.2 Integrate GET/products lambda to return a list of products from the database

 4 - TASK 4.3 Implement POST/products lambda and implement its logic so it will be creating a new item in a products table.

 5 - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend. Link to a working Front-End application is provided for cross-check reviewer.
Additional (optional) tasks (but nice to have):

 +1 - POST/products lambda functions returns error 400 status code if product data is invalid

 +1 - All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)

 +1 - All lambdas do console.log for each incoming requests and their arguments

 +1 - Transaction based creation of product
