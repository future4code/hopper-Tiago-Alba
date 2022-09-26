import { Request, Response } from "express"
import { users } from "../../types"
import { connection } from "../../data/connections"

export async function AddUser(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body

    const newUser: users = {
        id: new Date().toString(),
        name: name,
        email: email,
        password: password
    }
    const errorCode = 400

    try {

        const uniqueEmail = await connection.raw(`
        SELECT email FROM labecommerce_users
        WHERE email = "${newUser.email}"
        `)
        if (uniqueEmail[0].length === 1) {
            throw new Error("Email já Cadastrado")
        }

        if (!email.includes("@")) {
            throw new Error("Valor passado não é um email valido!")
        }

        if (!name || typeof name !== "string") {
            throw new Error("Nome é Obrigatirio, sendo uma string")
        }

       
        if (!email || typeof email !== "string") {
            throw new Error("Email é Obrigatirio, sendo uma string")
        }
        if (!password || typeof password !== "string") {
            throw new Error("password é Obrigatorio, sendo uma string")
        }

        await connection.raw(`
            INSERT INTO labecommerce_users(id,name,email,password)
            VALUE("${newUser.id}","${newUser.name}","${newUser.email}","${newUser.password}")
        `)
        response.send("Usuario Criado com Sucesso!")
    } catch (error: any) {
        response.status(errorCode).send(error.message)
    }
}
