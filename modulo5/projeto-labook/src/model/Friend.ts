export class Friend {

    constructor(
        private id: string,
        private id_resquester: string,
        private id_requested: string
    ){}

    getId(){
        return this.id
    }
    getIdRequester(){
        return this.id_resquester
    }
    getIdRequested(){
        return this.id_requested
    }
  
}