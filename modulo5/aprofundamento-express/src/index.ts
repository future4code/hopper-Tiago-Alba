import express, {Request , Response} from "express"
import cors from "cors"
import {todosAfazeres} from "./data"

const app = express()

app.use(express.json())
app.use(cors())


app.get("/ping",(request:Request,response:Response)=>{
    response.send("Pong!")
} )
app.get("/concluidos",(request:Request,response:Response)=>{
    const listaConcluidas = todosAfazeres.filter(afazer => afazer.completed)
    response.send(listaConcluidas)
})

app.post("/criar", (request:Request,response:Response)=>{
    
        
    
    const  novoAfazer = {
        userId: Date.now() ,
        id: Date.now(),
        title: request.body.title,
        completed: request.body.completed
    }
    if(novoAfazer.title && novoAfazer.completed){
        todosAfazeres.push(novoAfazer)
        response.send(todosAfazeres)
        response.status(200).send("Nova tarefa criada com sucesso!")
    }
   response.status(400).send("Obrigatorio title e completed")
})
app.post("/atualizar",(request:Request,response:Response)=>{
    let atualizarId =  request.query.id

    for (let i = 0; i < todosAfazeres.length; i++) {
            let idAAtualizar = todosAfazeres[i].id.toString()
            if(idAAtualizar === atualizarId){
                const atualizar = request.body.completed
                if( atualizar ===  "false" || "true" ){
                    todosAfazeres[i].completed = atualizar
                    response.status(200).send("lista atualizado com sucesso")
                    response.send(todosAfazeres)
                }
              
           
        }
    }
    response.status(400).send("id e completed Obrigatorios !")
})


app.listen(3003 , ()=>{
    console.log("Server is running in http://localhost:3003");
    
})