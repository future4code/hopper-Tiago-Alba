import {app} from "./app"
import {UserController} from "./controller/UserController"


const userController = new UserController()


app.post("/createUser",userController.createUser)
app.get("/getAllUser",userController.getAllUser)
app.delete("/deleteUser",userController.deleteUser)


