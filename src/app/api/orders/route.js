import { ResponseBuilder } from "@/lib/response-builder"

let orders = [
    {
        "id": 1,
        "customerName": "Prince William",
        "pizzaType": "Delux",
        "extraToppings": ["mushroom"],
        "quantity": 1,
        "drink": "Coke",
        "status": "complete"
    },
    {
        "id": 2,
        "customerName": "Princess Kate",
        "pizzaType": "3 Cheese Special",
        "extraToppings": ["olives", "tomato"],
        "quantity": 1,
        "drink": "Sprite",
        "status": "new"
    },
]

//http://localhost:3001/api/orders gets all the oders
export function GET() {
    console.log("Request Recieved");
    return ResponseBuilder.successResponse(orders);    //reuseable & unit testable
}

export async function POST(req){
    const body = await req.json(); //gives the data from the body of the request. Returns a promise
    const order = body;

    //this validation can be moved into a separate function
    if(!order.id){
        return ResponseBuilder.invalidRequest('Invalid Order ID'); 
    }

    orders.push(order);
    return ResponseBuilder.successResponse({'message':'order added'}); 
}