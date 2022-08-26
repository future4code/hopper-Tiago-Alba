import express, {query, Request , Response} from "express"
import cors from "cors"
import {users} from "./data"

const app = express()
app.use(express.json())
app.use(cors())


// exercicio 2
app.get("/" ,(request:Request , response:Response)=>{
  let permission = request.query
  try{
    if(permission){
        
    }
  }

});




app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003");
    
}) 