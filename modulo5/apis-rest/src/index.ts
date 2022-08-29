import express, { Request , Response} from "express"
import cors from "cors"
import  {users} from "./data"
const app = express()
app.use(express.json())
app.use(cors())

app.get("/Usuario", (request:Request , response:Response)=>{
    let acess = request.query.type?.toString().toUpperCase()
    let errorCode = 400
    try {

        if(!acess){
            throw new Error("Type Obrigatorio!")
        }

        if(acess !== "ADMIN" && acess !== "NORMAL"){
            throw new Error ("Tipo não encontrado")
        }
        const findTypes = users.filter(typeAcess => typeAcess.type === acess)
     response.send(findTypes)
    } catch (error:any) {
        response.status(errorCode).send(error.message)
    }
} );
app.get("/Usuario/Name", (request:Request,response:Response)=>{
    const findName = request.query.name?.toString().toLowerCase()
    let locateName = users.find(user => user.name.toLowerCase() === findName)
    console.log(findName, locateName);
    
    const erroCode = 400
    try{
        
        if(findName !== locateName?.name.toLowerCase()){
            throw new Error("Nome do usuario não encontrado")
        }
        if(findName === locateName?.name.toLowerCase()){
            response.status(200).send(locateName)
        }
    }catch(error:any ){
        response.status(erroCode).send(error.message)
    }
})
app.post("/Usuario/add",(request:Request , response: Response)=>{ 
    const {name,email,age} = request.body
    const newTypeUsuario = request.body.type.toString().toUpperCase()
    const erroCode = 400
    const newUser = {
        id : Math.random(),
        name,
        email,
        type: newTypeUsuario,
        age
    }
    try {
        if(typeof newUser.name !== "string"){
            throw new Error("Name deve ser uma string")
        }
        if(typeof newUser.email !== "string"){
            throw new Error ("Email deve ser uma string")
        }
        if(typeof newUser.type !== "string"){
            throw new Error ("type deve ser uma string")
        }
        if (newTypeUsuario !== "ADMIN" && newTypeUsuario !== "NORMAL"){
            throw new Error ("type não encontrado, Obrigatorio ser adimim ou normal")
        }
        if (typeof newUser.age !== "number"){
            throw new Error ("Age deve ser um number")
        }
        users.push(newUser)
        response.send(users)
    } catch (error: any) {
        response.status(erroCode).send(error.message)
    }
})



app.listen(3003, () => {
console.log("Server is running in http://locarlhost:3003");

})