# Node.js AWS / BE

**Adds dynamic product representation on frontend side**

## Tasks

 - [x] Create a lambda function called **getProductsList** triggered by GET. Requested URL: /products. Response: FULL array of products. Endpoint should be integrated with Frontend app for product list page representation.

 - [x] Create a lambda function **getProductById** triggered by GET. Requested URL: /products/{productId}. Response should be 1 searched product from an array. Endpoint is not needed to be integrated with Frontend right now!

 - [x] Mock data is used and is stored in Product Service

- [x] Async/await is used in lambda functions

- [x]  ES6 modules are used for product-service implementation

- [x]  Webpack is configured for product-service

- [x]  SWAGGER documentation is created for product-service

- [ ]  Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered) (You may use JEST)

- [x]  Lambda handlers (getProductsList, getProductById) code is written not in 1 single module (file) and separated in codebase

- [x]  Main error scenario's are handled by API ("Product not found" error, try catch blocks are used in lambda handlers)
