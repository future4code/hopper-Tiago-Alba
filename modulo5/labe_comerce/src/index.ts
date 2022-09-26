import app from "./app"
import {AddUser} from "./endpoints/post/addUser"
import {getUsers} from "./endpoints/get/getAllUsers"
import {addNewProduct} from "./endpoints/post/addProduct"
import {getAllProducts} from "./endpoints/get/getAllProducst"
import {addPurchase} from "./endpoints/post/addPurchases"
import {getPurchases} from "./endpoints/get/getPurchases"

app.post("/users",AddUser)
app.post("/products",addNewProduct)
app.post("/purchases",addPurchase)
app.get("/users",getUsers)
app.get("/products",getAllProducts)
app.get("/users/:user_id/purchases",getPurchases)