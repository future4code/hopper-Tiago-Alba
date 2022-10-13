import {Request,Response} from "express"
import {UserBusness} from "../business/UserBusiness"

export class UserController {
        public static userBusiness = new UserBusness()
     public createUser = async(req:Request,res:Response ) => {
        try {
            const {name,email,password} = req.body
            
        const data = {
            name,
            email,
            password
        }
        console.log(data);
        
        await UserController.userBusiness.CreateUser(data)
    
       res.status(200).send({message:"Usuario Criado com Sucesso"}) 
        } catch (error: any) {
            res.status(400).send(error.message)
        }
        
    }
    public getAllUser = async(req:Request,res:Response) => {
        try {
            const users = await UserController.userBusiness.getUsers()
            console.log(users);
            
            res.status(200).send(users)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
    public deleteUser = async(req:Request,res:Response) =>{
        try {
            const id = req.query.id 
          await UserController.userBusiness.deleteUser(id)
           res.status(200).send("Usuario deletado com sucesso!")
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

}
