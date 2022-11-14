import { CustomErro } from "./CustomError";

export class InvalidRequest extends CustomErro{
    constructor(){
        super(400,"Parametros invalidos!")
    }
}

export class InvalidToken extends CustomErro{
    constructor(){
        super(400,"Token invalido ou expirado!")
    }
}

export class InvalidPassword extends CustomErro{
    constructor(){
        super(400,"Password invalido!")
    }
}
export class InvalidEmail extends CustomErro{
    constructor(){
        super(400,"Esse não é um email valido!")
    }
}

export class InvaliRecipe extends CustomErro{
    constructor(){
        super(400,"Receita não encontrada!")
    }
}
export class InvalidSize extends CustomErro{
    constructor(){
        super(400,"password deve ter no minimo 5 caracteres")
    }
}
export class InvalidUser extends CustomErro{
    constructor(){
        super(400,"Usuario não encontrado!")
    }
}
export class InvalidRecipe extends CustomErro{
    constructor(){
        super(400,"Receita não encontrada!")
    }
}