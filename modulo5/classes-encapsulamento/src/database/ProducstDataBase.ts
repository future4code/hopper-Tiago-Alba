import BaseDataBase from "./BaseDateBase";
import {Product} from "../models/Product"

export class ProductsDataBase extends BaseDataBase{
    public static TABLE_PRODUCTS = "Labe_Products" 
    public async getAllProducts(){
        const result = await BaseDataBase.connection(ProductsDataBase.TABLE_PRODUCTS).select()
        return result
    }
    public async createProducts(newProduct:Product){
        const result = await BaseDataBase.connection(ProductsDataBase.TABLE_PRODUCTS).insert({
            id: newProduct.getId(),
            name: newProduct.getName(),
            price: newProduct.getPrice()
        }) 
        return result
    }
    public async getProductById(productId: string){
        const result = await BaseDataBase.connection(ProductsDataBase.TABLE_PRODUCTS).select().where({id:productId})
        return result
    }

}