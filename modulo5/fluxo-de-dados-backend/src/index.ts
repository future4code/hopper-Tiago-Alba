import express, { Request, Response } from "express"
import cors from "cors"
import { products } from "./data"
import { send } from "process"



const app = express()
app.use(express.json())
app.use(cors())

app.get("/teste", (request: Request, response: Response) => {
    response.send("Ola")
});



app.post("/AddProduct", (request: Request, response: Response) => {
    const newProduct = {
        id: Math.random().toString(),
        name: request.body.name,
        price: request.body.price
    }
    const product = products.find(myProduct => myProduct.name === newProduct.name)
    let statusCode = 400
    try {
        if (product) {
            statusCode = 409
            throw new Error("produto ja existente")

        }
        if (typeof newProduct.name !== "string") {
            throw new Error("Obrigatorio name ser uma string")
        }
        if (typeof newProduct.price !== "number") {
            throw new Error("Obrigatorio price ser um numero")
        }
        if (newProduct.price <= 0) {
            throw new Error("O preço deve ser maior que 0")
        }
        if (!product) {
            products.push(newProduct)
            response.send(products)
        }
    } catch (error: any) {
        response.status(statusCode).send(error.message)
    }

})

app.put("/Atualizar/price", (request: Request, response: Response) => {
    let statusCode = 400
    const id = request.query.id?.toString()
    let newPrice = request.body.price
    for (let i = 0; i < products.length; i++) {
        const idProduct = products[i].id;
        try {

            if (!newPrice) {
                throw new Error("Novo price obrigatorio")
            }

            if (typeof newPrice !== "number") {
                throw new Error("Obrigatorio price ser um numero")
            }
            if (newPrice <= 0) {
                throw new Error("O preço deve ser maior que 0")
            }


            if (id === idProduct) {
                products[i].price = newPrice
                response.send(products)
            }

        } catch (error: any) {
            response.status(statusCode).send(error.message)
        }

    }
})
app.delete("/DeletarItem", (request: Request, response: Response) => {
    const id = request.query.id?.toString()
    let statusCode = 400
    for (let i = 0; i < products.length; i++) {
        let index = products.indexOf(products[i])
        try {
            if (products[i].id !== id) {
                throw new Error("Id não encontrado!")
            }

            if (products[i].id === id) {
                products.splice(index, 1)
                response.send(products)
            }

        } catch (error: any) {
            response.status(statusCode).send(error.message)
        }


    }
})

app.listen(3003, () => {
    console.log("Server is running in http://locahost:3003");

})

