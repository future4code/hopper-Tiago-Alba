
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
        return this.name
    }
    getEmail() {
        return this.email
    }
    getPassword() {
        return this.password
    }
}

export interface UserInputDTO {
    name: string,
    email: string,
    password: string
}

export interface UserLoginDTO {
    email: string,
    password: string
}
export interface UserPerfil {
    id: string,
    name: string,
    email: string
}
export interface UserPerfilDTO {
    id: string,
    token: string
}