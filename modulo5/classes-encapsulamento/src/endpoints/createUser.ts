import { Request, Response } from "express"
import { User } from "../models/User"
import {UserDataBase} from "../database/UserDataBase"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = Date.now().toString()
        const email = req.body.email
        const password = req.body.password
        
        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const newUser = new User(id,email,password) 
        const baseDataBase = new UserDataBase()
        await baseDataBase.createUseres(newUser)

       /* await connection(TABLE_USERS).insert({
            id: newUser.getId(),
            email: newUser.getEmail(),
            password: newUser.getPassword()
        })*/
        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}