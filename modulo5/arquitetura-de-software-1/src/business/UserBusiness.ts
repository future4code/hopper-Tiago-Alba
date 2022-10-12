import { UserDataBase } from "../data/UserDataBase"
import {User} from "../models/Users"

export class UserBusness {
    public CreateUser = async (data: any) => {

        try {
            const [name, email, password] = data
            const id = Date.now().toString()
            const newUser = new UserDataBase()
            if (!name || typeof name !== "string") {
                throw new Error("name Obrigatorio sendo uma string!")
            }

            if (!email || typeof email !== 'string') {
                throw new Error("email Obrigatorio sendo uma string!")
            }
            if (!email.includes("@")) {
                throw new Error("Valor passado não é um email valido!")
            }
            if (!password || typeof password !== "string") {
                throw new Error("Passwoerd Obrigatorio sendo uma string!")
            }

            const user = new User(
                id,
                name,
                email,
                password,
            )
            await newUser.createUser(user)

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    public getUsers = async () =>{
        const user = new UserDataBase()
        await user.getAllUser()
    }
    public deleteUser = async (id:any) =>{
        const user = new UserDataBase()
        try {
            if(!id || typeof id !== "string"){
                throw new Error("Id Obrigatoria sendo uma string")
            }

            await user.deleteUser(id)
        } catch (error: any) {
            throw new Error(error.message)
        }
        
    }
}
