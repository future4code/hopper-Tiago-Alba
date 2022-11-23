import {Request,Response} from "express"
import {FriendInputDTO} from "../model/FriendInputDTO"
import {FriendBusiness} from "../business/FriendBusiness"

export class FriendController{
    constructor(
        private friendBusiness : FriendBusiness
    ){}
    public async Create(req:Request,res:Response){
        try {
            const {idRequested,idRequester} = req.body 
        
            const input:FriendInputDTO ={
                id_requester : idRequester,
                id_requested : idRequested
            }
            await this.friendBusiness.CreateNewFriend(input)
            res.status(200).send("Amizada realizada com sucesso!")
        } catch  (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    

    }
    public async getFriend(req:Request,res:Response){
        
        try {
            const {id} = req.params
          const allFrinds =  await this.friendBusiness.getUserFriends(id)
          res.status(200).send(allFrinds)
        } catch  (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
    public async Delete(req:Request,res:Response){
        try {
            const {idRequested,idRequester} = req.body
            const input:FriendInputDTO = {
                id_requested:idRequested,
                id_requester:idRequester
            }
            await this.friendBusiness.deleteFriend(input)
            res.status(200).send("Amigo deletado com sucesso!")
        } catch  (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
}