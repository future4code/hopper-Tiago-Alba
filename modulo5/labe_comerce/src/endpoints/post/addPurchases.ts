import { Request, Response } from "express"
import { purchases } from "../../types"
import { connection } from "../../data/connections"


export async function addPurchase(request: Request, response: Response): Promise<void> {
    const { userId, productId, quantity } = request.body
    const errorCode = 400
    const price = await connection.raw(`
    SELECT price FROM labecommerce_products
    WHERE id = "${productId}"
  `)

    const findPrice = JSON.parse((JSON.stringify(price[0])))



    const newPurchase: purchases = {
        id: Math.random().toString(),
        userId,
        productId,
        quantity,
        totalPrice: quantity * findPrice[0].price
    }
    try {
        const findUser = await connection.raw(`
            SELECT id FROM labecommerce_users
            WHERE id = "${userId}"
        `)
        const findProduct = await connection.raw(`
            SELECT id FROM labecommerce_products
            WHERE id = "${productId}"
        `)

        if (!quantity || typeof quantity !== "number") {
            throw new Error("Quantidade obrigatoria, sendo um number")
        }

        if (typeof userId !== "string" || typeof productId !== "string") {
            throw new Error("Id Deve ser uma string!")
        }

        if (findUser[0].length !== 1) {
            throw new Error("Usuario não encontrado ou não enviado")
        }

        if (findProduct[0].length !== 1) {
            throw new Error("Produto não encontrado ou não enviado")
        }



        await connection.raw(`
         INSERT INTO labecommerce_purchases(id,user_id,product_id,quantity,total_price)
         VALUE("${newPurchase.id}","${newPurchase.userId}","${newPurchase.productId}",${newPurchase.quantity},${newPurchase.totalPrice})
         `)
        response.send("Compra realizada com sucesso!")
    } catch (error: any) {
        response.status(errorCode).send(error.message)
    }

}
