import {Request, Response} from "express"
import {products} from "../../types"
import {connection} from "../../data/connections"

export async function getAllProducts(request:Request,response:Response): Promise <void> {
    
    const allProducst: products[] = await connection.raw(`
    SELECT * FROM labecommerce_products
    `)

    response.send(allProducst[0])
}
