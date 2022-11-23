
import {Post} from "../model/Post"

export interface PostRepository{
    insertPost(post:Post):Promise<void>

    getPost(id:string):Promise<any>
    
}