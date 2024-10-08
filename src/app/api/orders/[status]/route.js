//GET /api/orders/{status}
import { ResponseBuilder } from "@/lib/response-builder"
import orders from '../orders';


//http://localhost:3000/api/orders/status=new
export async function GET() {
    console.log("Request Received for Filtered");
    const newOrders = orders.filter(order => order.status === "new");   //this could be updated to filter for any status
    return ResponseBuilder.successResponse(newOrders);
}