import { app } from "./app";
import { getAllRecipes, } from "./endpoints/getAllRecipes";
import {getAllUsers} from "./endpoints/getAllUsers";
import {getNameUsers} from "./endpoints/getName"
import{getTypeUsers} from "./endpoints/getType"
import {getOrder} from "./endpoints/getEmail"

app.get("/recipes", getAllRecipes)

app.get("/users",getAllUsers)

app.get("/name",getNameUsers)

app.get("/type",getTypeUsers)

app.get("/order",getOrder)