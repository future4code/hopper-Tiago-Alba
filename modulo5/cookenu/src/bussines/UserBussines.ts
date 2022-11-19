import { InvalidEmail, InvalidPassword, InvalidRequest, InvalidSize, InvalidToken, InvalidUser } from "../Erro/invalidRequest";

import { User, UserInputDTO, UserLoginDTO, UserPerfilDTO } from "../model/User";
import { Authenticator } from "../service/Authenticator";
import { generateID } from "../service/GenerateId";
import { HashManager } from "../service/HashManager";
import { UserRepository } from "./UserRepository";

const hash = new HashManager()
const authenticator = new Authenticator()
export class UserBussines {
    constructor(private userBaseDatabase: UserRepository) { }


    public async Create({ name, email, password }: UserInputDTO) {
        try {
            if (!name || !email || !password) {
                throw new InvalidRequest()
            }
            if (!email.includes("@")) {
                throw new InvalidEmail()
            }
            if (password.length < 4) {
                throw new InvalidSize()
            }
            const id: string = generateID()
            const hashPassword = await hash.hash(password)
            const newUser = new User(id, name, email, hashPassword)
            await this.userBaseDatabase.insertUser(newUser)
            const token  = authenticator.generateToken({id})
            return token

        } catch (error: any) {
            throw new Error(error.message)
        }

    }
    public async Login({ email, password }: UserLoginDTO) {
        try {
            if (!email || !password) {
                throw new InvalidRequest()
            }
            const user = await this.userBaseDatabase.findUserByEmail(email)
            if (!user) {
                throw new InvalidUser()
            }
            const isValidPassword = await hash.compare(password, user.password)
            if (!isValidPassword) {
                throw new InvalidPassword()
            }
                const  id : string = user.id
            const token =  authenticator.generateToken({id})
            return token
        } catch (error: any) {
            throw new Error(error.message)
        }

    }
    public async Profile(token: string) {
        try {
            const {id} = authenticator.getTokenData(token)
           
            
            if (!token || !id) {
                throw new InvalidRequest()
            }
           
            
            const profile = await this.userBaseDatabase.findUser(id)
            
            
            return profile
        } catch (error: any) {
            throw new Error(error.message)
        }

    }
    public async Perfil({ id, token }: UserPerfilDTO) {
        try {
            const validToken = authenticator.getTokenData(token)

            if (!id || !token) {
                throw new InvalidRequest()
            }
            if (!validToken) {
                throw new InvalidToken();

            }
            const perfil = await this.userBaseDatabase.findUser(id)

            return perfil
        } catch (error: any) {
            throw new Error(error.message)
        }

    }
    public async getAllUser(token: string) {
        try {
            const validToken = authenticator.getTokenData(token)

            if (!validToken) {
                throw new InvalidToken()
            }

            const result = await this.userBaseDatabase.findAllUsers()
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }

    }
}