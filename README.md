# Node.js AWS / BE

**Adds dynamic product representation on frontend side**

## Tasks

 - [ ] Create a lambda function called **getProductsList** triggered by GET. Requested URL: /products. Response: FULL array of products. Endpoint should be integrated with Frontend app for product list page representation.

 - [ ] Create a lambda function **getProductsById** triggered by GET. Requested URL: /products/{productId}. Response should be 1 searched product from an array. Endpoint is not needed to be integrated with Frontend right now!

 - [ ] Mock data is used and is stored in Product Service

- [ ] Async/await is used in lambda functions

- [ ]  ES6 modules are used for product-service implementation

- [ ]  Webpack is configured for product-service

- [ ]  SWAGGER documentation is created for product-service

- [ ]  Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered) (You may use JEST)

- [ ]  Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase

- [ ]  Main error scenario's are handled by API ("Product not found" error, try catch blocks are used in lambda handlers)
