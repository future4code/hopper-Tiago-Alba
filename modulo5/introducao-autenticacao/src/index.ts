import { app } from "./app"
import { userRouter } from "../src/router/UserRouter"

app.use("/user", userRouter)