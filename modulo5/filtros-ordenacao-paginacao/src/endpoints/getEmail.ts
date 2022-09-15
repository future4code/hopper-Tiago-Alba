import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"


export const getOrder = async (req: Request, res: Response): Promise<void> => {
   const errorCode = 400
   const type = req.query.type
   let typeUser;
   let orderByEmail;
   try {
      if (!type) {
         orderByEmail = await connection.raw(
            `SELECT * FROM aula48_exercicio
                ORDER BY email ASC
                `
         )
      } else {
         typeUser = await connection.raw(
            `SELECT * FROM aula48_exercicio
             WHERE type = "${type}"
             ORDER BY id ASC
           `
         )

      }


      if (typeUser) {
         res.status(200).send(typeUser[0])
      }
      if(orderByEmail){
         res.status(200).send(orderByEmail[0])
      }
     

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