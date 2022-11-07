import { User, EditName } from "../model/User";


export interface UserRepository {
    insertUser(newUser: User): Promise<void>
    getAllUser(): Promise<void>
    insertLogin(email: string):Promise<any>
    editUser(userEdit:EditName):Promise<void>
}