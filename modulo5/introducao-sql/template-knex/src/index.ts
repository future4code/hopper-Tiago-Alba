import express,{Request,Response} from "express";
import cors from "cors";
import connection from "./database/connection";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/Usuarios", async (request:Request,response:Response)=>{
 const errorCode = 400
 
     try {
    
    const search = request.query.search
 const usuarios = await connection.raw(`
    SELECT * FROM usuarios
    `)
    const newSerch = await connection.raw(`
    SELECT * FROM usuarios
    WHERE nome LIKE "%${search}%"
    `)
    
    if(newSerch[0].length > 0){
      return response.send(newSerch[0])
    }
    if(search){
      throw new Error("Nenhum usuario encontrado")
    }
    response.send(usuarios[0])
   
  } catch (error:any) {
    response.status(errorCode).send(error.message)
  }
})
app.post("/AddUser", async (request:Request,response:Response)=>{
  let errorCode = 400
  const {nome,email} = request.body
   try {
    const searchEmail = await connection.raw(`SELECT email FROM usuarios
    WHERE email = "${email}"
    `)
    
    if(!nome || !email){
      errorCode = 404
      throw new Error("Obrigatorio passar Nome e Email")
    }
    if(typeof nome != "string" || typeof email !== "string"){
      errorCode = 406
      throw new Error ("Obrigatorio que Nome e Email seja uma String")
    }
    if(nome.length < 4){
      errorCode = 411
      throw new Error("Nome deve conter no minimo 4 letras")
    }
    
    if(searchEmail[0].length === 1 ){
     errorCode = 409
       throw new Error("Email já cadastrado!")
    }
   if(!email.includes("@")){
    throw new Error ("Email deve conter @")
   }
    await connection.raw(`
   INSERT INTO usuarios(id,nome,email)
   VALUE ("${new Date().toString()}","${nome}","${email}" )
   `)
    
   response.status(200).send("Usuario criado com sucesso!")
  } catch (error:any) {
    response.status(errorCode).send(error.message)
  }
})
app.put("/UpdateEmail", async (request:Request,response:Response)=>{
    const errorCode = 400
    const id = request.query.id
    const newEmail = request.body.email
    console.log(id)
    
    try {
      
      if(!newEmail){
        throw new Error("Novo email Obrigatorio!")
      }
      if(typeof newEmail !== "string" ){
        throw new Error("Novo email deve ser uma string!")
      }
      if(!newEmail.includes("@")){
        throw new Error("Novo email deve conter @!")
      }
      const searchEmail = await connection.raw(`SELECT email FROM usuarios
      WHERE email = "${newEmail}"
      `)
      if(searchEmail[0].length === 1){
        throw new Error("Email Já Cadastrado!")
      }
      const searchId = await connection.raw(`
      SELECT id FROM usuarios
      WHERE id = "${id}"
      `)
      console.log(searchId[0])
      if(searchId[0].length === 0){
          throw new Error("Id não encontrado!")
      }
      await connection.raw(`
      UPDATE usuarios
      SET email = "${newEmail}"
      WHERE id = "${id}"
      `)
      response.status(200).send("Email Atualiado com Sucesso!")
    } catch (error:any) {
      response.status(errorCode).send(error.message)
    }
})
app.delete("/Delete", async (request:Request,response:Response)=>{
  const id = request.query.id
  const errorCode = 400

try {
  if(!id){
    throw new Error("Id Obrigatorio!")
  }
  const searchId = await connection.raw(`
      SELECT id FROM usuarios
      WHERE id = "${id}"
      `)
      if(searchId[0].length === 0){
        throw new Error("Id não encontrado!")
      }
      await connection.raw(`
      DELETE FROM usuarios
      WHERE id = "${id}"
      `)
      response.status(200).send("Usuario deletado com sucesso!")
} catch (error:any) {
  response.status(errorCode).send(error.message)
}
})



app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});