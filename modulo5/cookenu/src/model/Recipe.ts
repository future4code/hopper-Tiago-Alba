export class Recipe  {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private userId: string
    ) { }
    getId() {
        return this.id
    }
    getTitle() {
        return this.title
    }
    getDescription() {
        return this.description
    }

    getidUser() {
        return this.userId
    }
}

export interface RecipeInputDTO {
    token: string,
    title: string,
    description: string
}
export interface FindRecipeInputDTO{
    token: string,
    id: string
}