
import {app} from "./app"
import { friendRouter } from "./routers/FriendRouter"
import { postRouter } from "./routers/PostRouters"
import {userRouter} from "./routers/UserRouters"

app.use("/use",userRouter)
app.use("/post",postRouter)
app.use("/friends",friendRouter)