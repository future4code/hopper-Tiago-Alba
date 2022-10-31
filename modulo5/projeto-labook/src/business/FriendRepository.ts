import { Friend } from "../model/Friend";

export interface FriendRepository{
    insertFriend(newFriend:Friend):Promise<void>
    getAllFriends(id:string):Promise<void>
    deleteFriend(idUsuario:string,idFriend:string):Promise<void>

}