import BaseDataBase from "./BaseDateBase";
 import { User } from "../models/User"
export class UserDataBase extends BaseDataBase{
   public static TABLE_USERS = "Labe_Users"
public async getAllUsers(){
    const result = await BaseDataBase.connection(UserDataBase.TABLE_USERS).select()
    return result
}
public async createUseres(user: User){
    const result = await BaseDataBase.connection(UserDataBase.TABLE_USERS).insert({
        id: user.getId(),
        email: user.getEmail(),
        passwoerd: user.getPassword()

    })
    return result
}
public async getUserById(userId:string){
 const result = await BaseDataBase.connection(UserDataBase.TABLE_USERS).select().where({id:userId})
 return result
}

}