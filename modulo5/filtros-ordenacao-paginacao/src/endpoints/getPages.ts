import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"


export const getPages = async(req: Request,res: Response): Promise<void> =>{
    const errorCode = 400
    const selectPage = Number(req.query.page)
    let page;
if(!selectPage){
   page = 0
  
}else if(selectPage < 0){
   page = 0
  
}else{
   page = (selectPage - 1) * 5  
}
console.log(selectPage)
    try {

     
       const pageUsers = await connection.raw(
        `SELECT * FROM aula48_exercicio
        LIMIT 5
        OFFSET ${page}
        `
       )
       if(!selectPage || selectPage === 0){
         throw new Error("Page Obrigatirio e deve ser um numero maior que 0")
      }
        const allUsersByTypes = pageUsers.map(toUsers)
       if(!pageUsers.length){
          res.statusCode = 404
          throw new Error("Usuario não encontrado!")
       }
 
       res.status(200).send(pageUsers[0])
       
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