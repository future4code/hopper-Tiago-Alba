import { BaseDatabase } from "./BaseDatabase";
import {User} from "../models/Users"

export class UserDataBase extends BaseDatabase{
    public static TABLE_USER = "User_Arq"

    public async createUser(newUser:User){
        const result = await BaseDatabase.connection(UserDataBase.TABLE_USER).insert({
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword()
        })
        return result
    }
    public async getAllUser(){
        const result : User[] = await BaseDatabase.connection(UserDataBase.TABLE_USER).select("*")
        return result
    }
    public async deleteUser(id:string){
        const result = await BaseDatabase.connection(UserDataBase.TABLE_USER).delete()
        .where({
            id : id
        })
    }
}
