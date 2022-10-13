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
        console.log(result,"aaa");
        
        return result
    }
    public async getAllUser(){
        const result  = await BaseDatabase.connection(UserDataBase.TABLE_USER).select("*")
        console.log(result);
        
        return result
    }
    public async deleteUser(id:string){
        const result = await BaseDatabase.connection(UserDataBase.TABLE_USER).delete()
        .where({
            id : id
        })
    }
}
