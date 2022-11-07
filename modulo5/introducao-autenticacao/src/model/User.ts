
export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }
    getId() {
        return this.id
    }
    getName() {
        this.name
    }
    getEmail() {
        return this.email
    }
    getPassword() {
        return this.password
    }
}

export interface UserInputDTO {
    name: string
    email: string
    password: string
}
export interface LoginUserDTO {
    email: string,
    password: string
}
export interface EditUser {
   name: string
   token: string
    
}
export interface EditName{
    id: string,
    name: string,

}