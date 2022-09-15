import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"


export const getNameUsers = async(req: Request,res: Response): Promise<void> =>{
    const errorCode = 400
    const name = req.query.name
    try {
       const nameUsers = await connection.raw(
        `SELECT * FROM aula48_exercicio
        WHERE name LIKE "%${name}%"
        `
       )
        const allUsersByName = nameUsers.map(toUsers)
       if(!nameUsers.length){
          res.statusCode = 404
          throw new Error("Usuario não encontrado!")
       }
 
       res.status(200).send(nameUsers[0])
       
    } catch (error:any) {
       console.log(error)
       res.status(errorCode).send(error.message)
    }
 }
 const toUsers = (input: any): users =>{
    return{
        id: input.id,
        name: input.name,
        email: input.email,
        type : input.type
    }
        
    
 };