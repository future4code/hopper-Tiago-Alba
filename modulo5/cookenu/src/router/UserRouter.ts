import express from "express"
import { UserBussines } from "../bussines/UserBussines"
import { UserController } from "../controller/UseController"
import { UserBaseDatabase } from "../data/UserBaseDatabase"

export const userRouter = express.Router()

const userDatabase = new UserBaseDatabase()
const userBusiness = new UserBussines(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post("/signup", (req, res) => userController.signup(req,res))
userRouter.post("/login", (req, res) => userController.Login(req,res))
userRouter.get("/profile", (req, res) => userController.Profile(req,res))
userRouter.get("/allusers", (req, res) => userController.GetAllUsers(req,res))
userRouter.get("/perfil:id", (req, res) => userController.Users(req,res))