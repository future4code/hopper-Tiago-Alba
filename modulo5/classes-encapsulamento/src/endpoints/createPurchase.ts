import { Request, Response } from "express"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"
import {PurchaseDataBase} from "../database/PurchaseDataBase"
import {UserDataBase} from "../database/UserDataBase"
import {ProductsDataBase} from "../database/ProducstDataBase"
export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = Date.now().toString()
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }
        const userDataBase = new UserDataBase()
        const findUser = await userDataBase.getUserById(userId)
         

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }
        const productDataBase = new ProductsDataBase()
        const findProduct = await productDataBase.getProductById(productId) 
           
        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }

        /* const product: Product = {
             id: findProduct[0].id,
             name: findProduct[0].name,
             price: findProduct[0].price
         }*/
        const product = new Product(findProduct[0].id, findProduct[0].name, findProduct[0].price)

        const price = JSON.parse(JSON.stringify(product.getPrice()))
        const totalPrice = price * quantity
        const newPurchase = new Purchase(id, userId, product.getId(), quantity, totalPrice)
         const purchaseDataBase = new PurchaseDataBase()
         await purchaseDataBase.createPurchase(newPurchase)
       /* await connection(TABLE_PURCHASES).insert({
            id: newPurchase.getId(),
            user_id: newPurchase.getUserId(),
            product_id: newPurchase.getProductId(),
            quantity: newPurchase.getQuantity(),
            total_price: newPurchase.getTotalPrice()
        })*/

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}