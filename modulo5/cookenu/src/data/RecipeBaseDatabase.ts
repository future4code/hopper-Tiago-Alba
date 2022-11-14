import { RecipeRespository } from "../bussines/RecipeRepository";
import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";


export class RecipeBaseDatabase extends BaseDatabase implements RecipeRespository {
    public static TABLE_RECIPE = "user_recipes"

    public async insertRecipe(newRecipe: Recipe): Promise<void> {
        await BaseDatabase.connection(RecipeBaseDatabase.TABLE_RECIPE).insert({
            id: newRecipe.getId(),
            title: newRecipe.getTitle(),
            description: newRecipe.getDescription(),
            id_user: newRecipe.getidUser()
        })
    }
    public async findRecipe(id: string): Promise<any> {
        const result = await BaseDatabase.connection(RecipeBaseDatabase.TABLE_RECIPE).select("*").where( "id","=",`${id}` ).orderBy("create_at", "desc")
        return result
    }
}