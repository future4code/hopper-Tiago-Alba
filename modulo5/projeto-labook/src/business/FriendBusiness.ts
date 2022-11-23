import { FriendInputDTO } from "../model/FriendInputDTO";
import { FriendRepository } from "./FriendRepository";
import { v4 as generateId } from 'uuid'
import { Friend } from "../model/Friend";
export class FriendBusiness{
    constructor(
       private friendsDatabase : FriendRepository ){}

    public async CreateNewFriend ({id_requester,id_requested}:FriendInputDTO):Promise<void>{
        if(!id_requested || !id_requester){
            throw new Error("Dados incompletos (id_requested,id_requester)")
        }
       const id = generateId()
       const friends = new Friend(id,id_requester,id_requested)
       await this.friendsDatabase.insertFriend(friends)
    }
    public async getUserFriends(id:string){
        if (!id){
            throw new Error ("id Obrigatoria!")
        }
        const result = await this.friendsDatabase.getAllFriends(id)
        return result
    }
    public async deleteFriend({id_requester,id_requested}:FriendInputDTO){
        await this.friendsDatabase.deleteFriend(id_requester,id_requested)
    }
}