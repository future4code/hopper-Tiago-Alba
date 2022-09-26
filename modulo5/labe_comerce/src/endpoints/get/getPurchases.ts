import {Request, Response} from "express"
import {connection} from "../../data/connections"

export async function getPurchases(request:Request , response:Response): Promise <void>{
const userId: string = request.params.user_id
    const errorCode = 400
  
    
    
    try {
        const findPurchases = await connection.raw(`
        SELECT c.id, u.name, p.name as product, c.quantity, c.total_price FROM labecommerce_purchases as c 
        INNER JOIN labecommerce_products as p ON c.product_id = p.id 
        INNER JOIN labecommerce_users as u ON c.user_id = u.id
        WHERE user_id = "${userId}"
        `)
       
      
        if(!userId){
            throw new Error("params user_id é obrigatorio!")
        }
        if(findPurchases[0].length === 0){
            throw new Error("Usuario não encontrado!")
    }
        response.send(findPurchases[0])
    } catch (error: any) {
        response.status(errorCode).send(error.message)
        
    }
    
   

}