import { Request, Response } from "express"
import {ProductsDataBase} from "../database/ProducstDataBase"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       // const result = await connection(TABLE_PRODUCTS).select()
       const productsDatabase = new ProductsDataBase()
       const result = await productsDatabase.getAllProducts()
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}