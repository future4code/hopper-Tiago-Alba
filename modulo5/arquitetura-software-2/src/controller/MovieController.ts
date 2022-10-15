import { Request, Response } from "express";
import {MovieBusiness} from "../business/MovieBusiness"

export class MovieController {
    async create(req:Request,res:Response){
        try {
            const [title,description,duration,release] = req.body
            const movieBusiness = new MovieBusiness()
            await movieBusiness.create(title,description,duration,release)
            
            res.status(201).send("Filme Criado com sucesso!")
            
            
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
    async getAll(req:Request,res:Response){
        try {
            const movieBusiness = new MovieBusiness()
            const allData = movieBusiness.getAll()
            res.status(200).send(allData)
        }  catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}