import { connection } from "../../data/connections"
import { Request, Response } from "express"
import { products } from "../../types"

export async function addNewProduct(request: Request, response: Response):Promise <void> {

    const { name, price, imageUrl } = request.body
    const errorCode = 400
    const newProduct: products = {
        id: Math.random().toString(),
        name,
        price,
        imageUrl
    }

    try {

        const uniqueProduct = await connection.raw(`
         SELECT name FROM labecommerce_products
         WHERE name = "${newProduct.name}"
        `)
        if (uniqueProduct[0].length === 1) {
            throw new Error("Produto já Existente!");
        }

        if (!name || typeof name !== "string") {
            throw new Error("Nome do Produto é obrigatorio, sendo uma string")
        }

        if (!price || typeof price !== "number") {
            throw new Error("Preço do Produto é obrigatorio, sendo um number")
        }
        
        if (!imageUrl || typeof name !== "string") {
            throw new Error("ImageUrl do Produto é obrigatorio, sendo uma string")
        }

        await connection.raw(`
        INSERT INTO labecommerce_products(id,name,price,image_url)
        VALUE("${newProduct.id}","${newProduct.name}","${newProduct.price}","${newProduct.imageUrl}") 
        `)
        response.send("Produto criado com sucesso!")
    } catch (error: any) {
        response.status(errorCode).send(error.message)
    }
}