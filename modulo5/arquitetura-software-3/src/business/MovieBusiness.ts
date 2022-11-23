import {MovieDatabase} from "../data/MovieDataBase"
import {Movies} from "../types/Movies"
import { v4 as generateId } from 'uuid'
export class MovieBusiness{

    public async create(title:string ,description:string,duration:number,release:number){
        if(!title || !description || !duration || !release){
            throw new Error("Dados invalidos (title, description, duration, relese)")

        }
        const id = generateId()
        const movie = new Movies(id,title,description,duration,release)
        const movieDataBase = new MovieDatabase()
        await movieDataBase.create(movie)
    }
    public async getAll(){
        const movieDataBase = new MovieDatabase()
        const allData = await movieDataBase.getAll()
        if(allData.length === 0){
            throw new Error('Lista Vazia')
        }
        return allData
    }
}