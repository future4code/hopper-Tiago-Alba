import express from "express"
import { UserBussines } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserBaseDatabase } from "../data/UserBaseDatabase"

export const userRouter = express.Router()

const userdataBase = new UserBaseDatabase()
const userBusiness = new UserBussines(userdataBase)
const userController = new UserController(userBusiness)

userRouter.post("/create", (req, res) => userController.signup)
userRouter.get("/getAll", (req, res) => userController.getAllUser)
