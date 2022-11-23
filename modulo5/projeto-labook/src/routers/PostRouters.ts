import express from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostController } from "../controler/PostController"
import { PostDatabase } from "../data/PostDatabase"

export const postRouter = express.Router()

const postDatabase = new PostDatabase()
const postBusiness = new PostBusiness(postDatabase)
const postController = new PostController(postBusiness)

postRouter.post("/create", (req, res) => postController.Create)
postRouter.get("getPost", (req, res) => postController.getById)