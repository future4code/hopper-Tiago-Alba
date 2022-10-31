
import { User } from "../model/User";
import { v4 as generateId } from 'uuid'
import { UserRepository } from "./UserRepository";
import { UserInputDTO } from "../model/UserInputDTO";
export class UserBusiness {
    constructor(
        private userDataBase: UserRepository) { }

    public async CreateNewUser({ name, email, password }: UserInputDTO): Promise<void> {

        if (!name || !email || !password) {
            throw new Error("Dados incompletos (name, email, password)")
        }
        if (!email.includes("@")) {
            throw new Error("Este não é um email valido!")
        }
        const id = generateId()
        const user = new User(id, name, email, password)

        await this.userDataBase.insertUser(user)

    }
    public async getAllUser(){
        const result = this.userDataBase.getAllUser()
        
        return result
    }
}