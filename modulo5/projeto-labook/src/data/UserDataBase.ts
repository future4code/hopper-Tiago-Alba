import { UserRepository } from "../business/UserRepository"
import { User } from "../model/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase implements UserRepository {
public static TABLE_USER = "labook_users"

public async insertUser(newUser:User){
 await BaseDatabase.connection(UserDatabase.TABLE_USER).insert({
    id:newUser.getId(),
    name:newUser.getName(),
    email: newUser.getEmail(),
    password: newUser.getPassword()
 })
}
public async getAllUser(){
   const result = await BaseDatabase.connection(UserDatabase.TABLE_USER).select("*")
   return result
}
}