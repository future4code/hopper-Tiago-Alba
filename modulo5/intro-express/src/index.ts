import express , {Request , Response } from "express"
import cors from "cors"
import {meusUsuarios} from "./data"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(request: Request, response:Response)=>{
   
    response.send("Hello from Express")
    
} )
app.get("/novo/:id",(request:Request, response:Response)=>{
    const id = request.params
    const name = request.body
    const phone = request.body
    const email = request.body
    const website = request.body
    console.log(id,name,phone,email,website);
    response.send("Boa")
    
})
app.get("/usuarios",(request:Request , response:Response)=>{
    const usuarios = meusUsuarios
    response.status(200).send(usuarios)
    
})




app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003");
    
})