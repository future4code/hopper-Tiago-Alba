import app from "./app"
import { recipeRouter } from "./router/RecipeRouter"
import { userRouter } from "./router/UserRouter"

app.use("/user", userRouter)
app.use("/recipe", recipeRouter)