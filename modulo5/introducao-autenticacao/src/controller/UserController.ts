import { Request, Response } from "express"
import { UserBussines } from "../business/UserBusiness";
import { LoginUserDTO, UserInputDTO, EditUser } from "../model/User";

export class UserController {
    constructor(private userBusiness: UserBussines) { }

    public async signup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body

            const input: UserInputDTO = {
                name,
                email,
                password
            }
            const token = this.userBusiness.CreateNewUser(input)
            res.status(200).send({ message: "Usuario criado com sucesso !", token });
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }

    }
    public async getAllUser(res: Response, req: Request) {
        try {
            const result = this.userBusiness.getAllUser()
            res.send(200).send(result)
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })

        }

    }
    public async Login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const input: LoginUserDTO = {
                email,
                password
            }
            const token = await this.userBusiness.Login(input)
            res.status(200).send({ token })
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }

    }
    public async EditUser(req: Request, res: Response) {
        try {
            const input: EditUser = {
                name: req.body,
                token: req.headers.authorization as string

            }
            res.status(200).send("Usuario editado com sucesso!")

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })

        }
    }
}
