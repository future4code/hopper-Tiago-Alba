import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }
  async getAll(){
  
    const userDatabase = new UserDatabase()
   const allData = await userDatabase.getAll()
    if(allData.length === 0){
      throw new Error("Lista de usuario esta vazia!")
    }
    return allData
   }
  }

