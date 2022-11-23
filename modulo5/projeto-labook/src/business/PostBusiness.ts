import {Post} from "../model/Post"
import { v4 as generateId } from 'uuid' 
import { PostRepository } from "./PostRepository"
import { PostInputDTO } from "../model/PostInputDTO"

export class PostBusiness{
    constructor(
        private postDatabase: PostRepository
    ){}
    public async CreatePost(input:PostInputDTO){
        const {photo,description,type,authorId} = input
        if(!photo || !description || !type  || authorId){
            throw new Error("Campos Obrigatorios (photo,description,type,authorId)")
        }
        const id = generateId()
        
        const post = new Post(id,photo,description,type,authorId)
        this.postDatabase.insertPost(post)
    }
    public async getPostById(id:string){
        if(!id){
            throw new Error("id Obrigatoria!")
        }
        const result = this.postDatabase.getPost(id)
        
        if(!result){
            throw new Error("Post não encontrado!")
        }

        
        return result
    }
}