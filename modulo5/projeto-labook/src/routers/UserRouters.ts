import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDataBase";
import { UserControler } from "../controler/UserController";

export const userRouter = express.Router()

const userDatabase = new UserDatabase()
const userBusines = new UserBusiness(userDatabase)
const userController = new UserControler(userBusines)

userRouter.post("/create", (req, res) => userController.Create)
userRouter.get("/getAll", (req, res) => userController.getAll)