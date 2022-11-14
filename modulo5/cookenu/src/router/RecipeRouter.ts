import express from "express"
import { RecipeBussines } from "../bussines/RecipeBussines"
import { RecipeController } from "../controller/RecipeController"
import { RecipeBaseDatabase } from "../data/RecipeBaseDatabase"

export const recipeRouter = express.Router()

const recipeDatabse = new RecipeBaseDatabase()

const recipeBussines = new RecipeBussines(recipeDatabse)

const recipeController = new RecipeController(recipeBussines)

recipeRouter.post("/recipe", (req, res) => recipeController.Create(req,res))
recipeRouter.get("/recipe:id", (req, res) => recipeController.Recipes(req,res))