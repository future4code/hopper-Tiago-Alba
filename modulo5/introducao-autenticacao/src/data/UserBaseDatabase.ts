import { UserRepository } from "../business/UserRepository";
import { EditName, EditUser, LoginUserDTO, User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserBaseDatabase extends BaseDatabase implements UserRepository {
    public static TABLE_USER = "alguma Tabela "

    public async insertUser(newUser: User): Promise<void> {
        await BaseDatabase.connection(UserBaseDatabase.TABLE_USER).insert({
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword()
        })
    }
    public async getAllUser(): Promise<any> {
        const result = await BaseDatabase.connection(UserBaseDatabase.TABLE_USER).select("*") 
        return result
    }
    public async insertLogin(email: string): Promise<void> {
        const result  = await BaseDatabase.connection(UserBaseDatabase.TABLE_USER).select("*").where({ email })
        return result[0]
    }
    public async editUser(editname: EditName): Promise<void> {
        await BaseDatabase.connection(UserBaseDatabase.TABLE_USER).update({name:editname.name}).where(editname.id)
    }
}
