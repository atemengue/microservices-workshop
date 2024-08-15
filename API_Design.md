// Import the HTTP module
TODO : API DESIGN

# API Design

### Product Model
- name : string
- description : string
- price : number
- stock : number
- categoryId : string (foreign key)

### Endpoints

1. Create Product
HTTP POST
URL: /api/product
Request body: Product entity

Response:   201: Product created
            500: Application error

2. Update Product
HTTP PUT
URL: /api/product/:id
Request body: Product entity

Response:   200: Product updated
            500: Application error

3. Delete Product
HTTP DELETE
URL: /api/product/:id

Response:   200: OK
            500: Application error

4. Get Product by ID
HTTP GET
URL: /api/product/:id

Response:   200: Product updated
            404: Product not found
            500: Application error           

5. Get all Products
HTTP GET
URL: /api/products

Response:   200: A list of product
            404: product not found
            500: Application error 