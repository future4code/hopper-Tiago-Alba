import express from "express"
import { FriendBusiness } from "../business/FriendBusiness"
import { FriendController } from "../controler/FriendController"
import { FriendDatabase } from "../data/FriendsDatabase"

export const friendRouter = express.Router()

const friendDatabase = new FriendDatabase()
const friendBusiness = new FriendBusiness(friendDatabase)
const friendController = new FriendController(friendBusiness)

friendRouter.post("/create",friendController.Create)
friendRouter.get("/friends",friendController.getFriend)
friendRouter.delete("/delete",friendController.Delete)