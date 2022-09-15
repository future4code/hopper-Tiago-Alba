import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"


export const getTypeUsers = async(req: Request,res: Response): Promise<void> =>{
    const errorCode = 400
    const type = req.query.type
    try {
       const typeUser = await connection.raw(
        `SELECT * FROM aula48_exercicio
        WHERE type LIKE "%${type}%"
        `
       )
        const allUsersByTypes = typeUser.map(toUsers)
       if(!typeUser.length){
          res.statusCode = 404
          throw new Error("Usuario não encontrado!")
       }
 
       res.status(200).send(typeUser[0])
       
    } catch (error:any) {
       console.log(error)
       res.status(errorCode).send(error.message)
    }
 }
 const toUsers = (input: any): users =>{
    return{
        id: input.id,
        name: input.name ,
        email: input.email,
        type : input.type
    }
        
    
 };