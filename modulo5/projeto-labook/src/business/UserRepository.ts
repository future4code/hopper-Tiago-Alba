import { User } from "../model/User";

export interface UserRepository{
    insertUser(newUser: User):Promise<void>

    getAllUser():any
}