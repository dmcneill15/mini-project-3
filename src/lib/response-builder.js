export class ResponseBuilder {

    static successResponse(data, statusCode=200){
        console.log("Entered success reponse")
        return new Response(JSON.stringify(data),{
            status:statusCode,
            headers:{'Content-Type':'application/json'}
        })
    }

    static invalidRequest(errorMessage, statusCode){
        return new Response(JSON.stringify({error: errorMessage}),{
            status:statusCode,
            headers:{'Content-Type':'application/json'}
        })
    }
}