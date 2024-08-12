import { ResponseBuilder } from "@/lib/response-builder"
import orders from './orders';

//http://localhost:3000/api/orders gets all the oders
export function GET() {
    console.log("Request Recieved");
    return ResponseBuilder.successResponse(orders);    //reuseable & unit testable
}

//adds a new order
export async function POST(req){
    const body = await req.json(); 
    const order = body;             //order will be in the body of the request

    //this validation can be moved into a separate function
    if(!order.id){
        return ResponseBuilder.invalidRequest('Invalid Order ID'); 
    }

    orders.push(order);
    return ResponseBuilder.successResponse({'message':'order added'}); 
}