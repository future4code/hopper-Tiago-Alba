import { BaseDatabase } from "./BaseDatabase";
import { Post } from "../model/Post"
import { PostRepository } from "../business/PostRepository";

export class PostDatabase extends BaseDatabase implements PostRepository {
    private static POST_TABLE = "labook_posts"

    public async insertPost(newPost: Post) {
        await BaseDatabase.connection(PostDatabase.POST_TABLE).insert({
            id: newPost.getAuthorId(),
            photo: newPost.getPhoto(),
            description: newPost.getDescription(),
            type: newPost.getTypes(),
            author_id: newPost.getAuthorId()
        })
    }
    public async getPost(id: string): Promise<any> {
        const result: Post[] = await BaseDatabase.connection(PostDatabase.POST_TABLE).select("*").where({ id })
        return result


    }

}