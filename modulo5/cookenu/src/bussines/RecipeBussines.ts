import { RecipeBaseDatabase } from "../data/RecipeBaseDatabase";
import { InvalidRecipe, InvalidRequest, InvalidToken } from "../Erro/invalidRequest";
import { FindRecipeInputDTO, Recipe, RecipeInputDTO } from "../model/Recipe";
import { Authenticator } from "../service/Authenticator"
import { generateID } from "../service/GenerateId";

const authentication = new Authenticator()


export class RecipeBussines {
    constructor(private recipeDatabase: RecipeBaseDatabase) { }
    public async Create({ token, title, description, }: RecipeInputDTO) {
        try {
            const userId = authentication.getTokenData(token)
            console.log(userId);

            console.log(userId.id);

            if (!userId) {
                throw new InvalidToken()
            }
            if (!title || !description) {
                throw new InvalidRequest()
            }
            const id: string = generateID()

            const newRecipe = new Recipe(id, title, description, userId.id)
            console.log(newRecipe);

            await this.recipeDatabase.insertRecipe(newRecipe)
        } catch (error: any) {
            throw new Error(error.message)
        }

    }
    public async UserRecipe({ token, id }: FindRecipeInputDTO) {
        try {
            const userId = authentication.getTokenData(token)
            if (!userId) {
                throw new InvalidToken()
            }
            const recipe = await this.recipeDatabase.findRecipe(id)
            if (!recipe) {
                throw new InvalidRecipe()
            }
            return recipe
        } catch (error: any) {
            throw new Error(error.message)
        }

    }

}