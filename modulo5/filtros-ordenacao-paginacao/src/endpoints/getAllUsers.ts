import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    const errorCode = 400
    
    try {
       const users = await connection("aula48_exercicio")
        const allUsers = users.map(toUsers)
       if(!users.length){
          res.statusCode = 404
          throw new Error("Usuario não encontrado!")
       }
 
       res.status(200).send(allUsers)
       
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