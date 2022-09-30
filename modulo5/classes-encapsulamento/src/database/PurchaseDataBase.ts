import BaseDataBase from "./BaseDateBase"
import {Purchase,PurchaseDB} from "../models/Purchase"

export class PurchaseDataBase extends BaseDataBase{
     public static TABLE_USERS = "Labe_Users"
     public static TABLE_PRODUCTS = "Labe_Products"
     public static TABLE_PURCHASES = "Labe_Purchases"

     public async createPurchase(newPurchase:Purchase){
        const result = await BaseDataBase.connection(PurchaseDataBase.TABLE_PURCHASES).insert({
            id: newPurchase.getId(),
            user_id: newPurchase.getUserId(),
            product_id: newPurchase.getProductId(),
            quantity: newPurchase.getQuantity(),
            total_price: newPurchase.getTotalPrice()
        })
        return result
     }
     public async getPurchase(id:string){
        const result = await BaseDataBase.connection.raw(`
        SELECT
        ${PurchaseDataBase.TABLE_USERS}.email,
        ${PurchaseDataBase.TABLE_PRODUCTS}.name AS product_name,
        ${PurchaseDataBase.TABLE_PRODUCTS}.price AS product_price,
        ${PurchaseDataBase.TABLE_PURCHASES}.quantity AS product_quantity,
        ${PurchaseDataBase.TABLE_PURCHASES}.total_price
    FROM ${PurchaseDataBase.TABLE_PURCHASES}
    JOIN ${PurchaseDataBase.TABLE_USERS}
    ON ${PurchaseDataBase.TABLE_PURCHASES}.user_id = ${PurchaseDataBase.TABLE_USERS}.id
    JOIN ${PurchaseDataBase.TABLE_PRODUCTS}
    ON ${PurchaseDataBase.TABLE_PURCHASES}.product_id = ${PurchaseDataBase.TABLE_PRODUCTS}.id
    WHERE ${PurchaseDataBase.TABLE_PURCHASES}.user_id = ${id};
        `)
        return result
     }
}