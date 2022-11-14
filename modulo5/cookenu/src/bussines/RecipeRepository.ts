import {Recipe} from "../model/Recipe"

export interface RecipeRespository{
    insertRecipe(newRecipe:Recipe):Promise<void>
    findRecipe(id:string):Promise<any>
    
}