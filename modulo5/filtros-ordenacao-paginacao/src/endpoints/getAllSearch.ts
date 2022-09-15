import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"


export const getAllSearch = async (req: Request, res: Response): Promise<void> => {
    const errorCode = 400
    const name = req.query.name as string
    const type = req.query.type as string
    const findPage = Number(req.query.page) 
    let find;
    let newFind;
    let page = (findPage * 5) - 1
    if (!page){
        page = 0
    }
    if (name) {
        newFind  = "name"
    } else if (type) {
        newFind = "type"
    }

    switch (newFind) {
        case "name":
            find = name
            break
        case "type":
            find = type
    }
    if(!name && !type){
        newFind = "name"
        find = "%"
    }

    try {
        const users = await connection.raw(`
        SELECT * FROM aula48_exercicio
        WHERE ${newFind} LIKE "%${find}%" 
        ORDER BY email ASC
        LIMIT 5
        OFFSET ${page}
       `)
        const allUsers = users.map(toUsers)
        if (!users.length) {
            res.statusCode = 404
            throw new Error("Usuario não encontrado!")
        }

        res.status(200).send(users[0])

    } catch (error: any) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
}
const toUsers = (input: any): users => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }


};