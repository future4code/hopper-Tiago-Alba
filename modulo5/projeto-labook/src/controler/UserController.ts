import {Request,Response} from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserInputDTO } from "../model/UserInputDTO"

export class UserControler{
    constructor(private userBusines:UserBusiness){}
   public async Create(req:Request,res:Response){
try {
    const {name,email,password} = req.body
    const input:UserInputDTO = {
        name,
        email,
        password
    }
   this.userBusines.CreateNewUser(input)
    res.status(200).send("Usuario criado com sucesso !")
} catch   (error:any) {
    res.statusCode = 400
    let message = error.sqlMessage || error.message
    res.send({ message })
}
    }
    public async getAll(res:Response,req:Request){
        
        try {
        const allUser = await this.userBusines.getAllUser()
        res.status(200).send(allUser)
        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
}