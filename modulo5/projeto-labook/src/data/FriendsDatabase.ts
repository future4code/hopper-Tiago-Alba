import { FriendRepository } from "../business/FriendRepository";
import { Friend } from "../model/Friend";
import {BaseDatabase} from "./BaseDatabase"

export class FriendDatabase extends BaseDatabase implements FriendRepository {
    private static TABLE_FRIEND = "labook_friends"

    public async insertFriend(newFriend:Friend){
        await BaseDatabase.connection(FriendDatabase.TABLE_FRIEND).insert({
            id: newFriend.getId(),
            id_requester: newFriend.getIdRequester(),
            id_requested: newFriend.getIdRequested()
        })
    }
    public async getAllFriends(id:string){
        await BaseDatabase.connection.raw(`
        SELECT * FROM labook_friends
        WHERE id_requester = "${id}" 
        OR id_requested = "${id}"
        `)
    }
    public async deleteFriend(idUsuario:string,idFriend:string){
       const id : string = await BaseDatabase.connection.raw(`
        SELECT id FROM labook_friends
        WHERE id_requested = "${idUsuario}" 
        AND id_requester = "${idFriend}"
        OR id_requested = "${idFriend}" 
        AND id_requester = "${idUsuario}"
        `)
        if(id){
            await BaseDatabase.connection(FriendDatabase.TABLE_FRIEND).delete().where(id)
        }
    }
    
}