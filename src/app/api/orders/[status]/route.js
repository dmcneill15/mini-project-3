//GET /api/orders/{status}
import { ResponseBuilder } from "@/lib/response-builder"
import orders from '../orders';


//http://localhost:3001/api/orders/status=new
export function GET() {
    console.log("Request Received for Filtered");
    const newOrders = orders.filter(order => order.status === "new");
    return ResponseBuilder.successResponse(newOrders); // reusable & unit testable
}