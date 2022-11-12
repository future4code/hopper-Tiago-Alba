import { EditName, EditUser, LoginUserDTO, User, UserInputDTO } from "../model/User";
import { Authenticator } from "../service/Authenticator";
import { generateId } from "../service/GenerateId";
import { UserRepository } from "./UserRepository";
import {HashManager} from "../service/HashManager"

const autenthicator = new Authenticator
const hash = new HashManager

export class UserBussines {
    constructor(private userBaseDatabase: UserRepository) { }

    public async CreateNewUser({ name, email, password }: UserInputDTO) {
        if (!name || !email || !password) {
            throw new Error("Dados incompletos(name,email,password)são obrigatorios")
        }
        if (!email.includes("@")) {
            throw new Error("Email invalido!")
        }
        const id: string = generateId()
        const  hashPassword: string  =  await hash.hash(password)
        const user = new User(id, name, email, hashPassword)
        await this.userBaseDatabase.insertUser(user)
        const token = autenthicator.generateToken({ id })
        return token
    }

    public async getAllUser() {
        const result = await this.userBaseDatabase.getAllUser()
        return result
    }
    public async Login({ email, password }: LoginUserDTO) {
        if (!email || !password) {
            throw new Error("Dados incompletos (email,password)")
        }
        if (!email.includes("@")) {
            throw new Error("isto não é um email valido!")
        }
        const user = await this.userBaseDatabase.insertLogin(email)
        if (!user) {
            throw new Error("Usuario não encontrado!")

            
        }
        const isValidPassword = await hash.compare(password,user.password)
        if(!isValidPassword){
            throw new Error("password invalido!")
        }
        const token = autenthicator.generateToken({id:user.id})
        return token
    }
    public async EditUser({name,token}:EditUser){
        if(!name || !token){
            throw new Error("Dados incompletos (Name,token)")
        }
        const {id} = autenthicator.getTokenData(token)

        const newName:EditName = {
            id,
            name
        }
        await this.userBaseDatabase.editUser(newName)
    }
}