# mini-project-3

Implement a REST API app using Next.js framework.
The API is able to fetch all orders and orders filtered by a status of new.
Bootstrap is used to style components.

The main home page is client side rendered, along with the about and contact pages.
The orders page is server side rendered.
The orders page as well as the cart page are protected and require a user to be authenticated to gain access.

## How to run API on local

1. Clone this repository: 
```bash
    git clone https://github.com/dmcneill15/mini-project-3.git
    cd mini-project-3
```
2. Install dependencies using:
```bash
    npm install
```
3. Start the server using:
```bash
    npm run dev
```
4. Open POSTMAN or similar and test the endpoints:
   - Get all orders:      GET http://localhost:3000/api/orders
   - Get filtered orders: GET http://localhost:3000/api/orders/status=new
   - Add a new order:     POST http://localhost:3000/api/orders

### Order data model:
 ```json
{
  "id": 1,
  "customerName": "Prince William",
  "pizzaType": "Margherita",
  "extraToppings": ["cheese", "mushroom", "tomato"],
  "quantity": 1,
  "drink": "Coke",
  "status": "new"
}
```
