import { Request, Response } from "express"
import { UserBussines } from "../bussines/UserBussines";
import { UserInputDTO, UserLoginDTO, UserPerfilDTO } from "../model/User";

export class UserController {
    constructor(private userBussines: UserBussines) { }

    public async signup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
            const input: UserInputDTO = {
                name,
                email,
                password
            }
            const token = await this.userBussines.Create(input)
            res.status(200).send({ message: "Usuario criado com sucesso!", token })
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }

    }
    public async Login(req: Request, res: Response) {

        try {
            const { email, password } = req.body

            const input: UserLoginDTO = {
                email,
                password
            }

            const token = await this.userBussines.Login(input)
            res.status(200).send(token)
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }


    }
    public async Profile(req: Request, res: Response) {

        try {
            const token = req.headers.authorization as string
           
            

            const profile = await this.userBussines.Profile(token)

            res.status(200).send(profile)

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }

    }
    public async Users(req: Request, res: Response) {
        
        try {
            const id = req.path
            const token = req.headers.authorization as string

            const input:UserPerfilDTO ={
                id,
                token
            } 

            const user = await this.userBussines.Perfil(input)
            
            res.status(200).send(user)

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
    public async GetAllUsers(req:Request,res:Response){
        try {
            const token = req.headers.authorization as string

            const users = await this.userBussines.getAllUser(token)
            res.status(200).send(users)
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
       
    }
}