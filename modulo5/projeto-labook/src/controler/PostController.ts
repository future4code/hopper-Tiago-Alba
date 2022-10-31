import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostInputDTO } from "../model/PostInputDTO"

export class PostController {
    constructor(private postBusiness: PostBusiness) { }

    public async Create(req: Request, res: Response) {
        try {
            const { photo, description, type, authorId } = req.body

            const input : PostInputDTO = {
                photo,
                description,
                type,
                authorId

            }
            this.postBusiness.CreatePost(input)

            res.status(200).send("Post Criado com Sucesso!")

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
    public async getById(req: Request, res: Response) {
        try {
            const { id } = req.params

            const result = this.postBusiness.getPostById(id)

            res.status(200).send(result)

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }

    }
}