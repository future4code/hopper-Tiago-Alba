export class Empilhamento {
    constructor(
        public items: any[] = [],
        public lenght: number = 0) { }



        isEnpty(){
            if(this.lenght === 0 ){
                return console.log("Empilhamento vazio!");
                
            }else{
                return console.log("Empilhamento não esta vazio!");
                
            }
        }
        push(item:any){
            this.items[this.lenght] = item
            this.lenght++
        }
        pop(){
            if(this.lenght === 0){
                console.log("Empilhamneto vazio!");
                
            }else{
                this.lenght--
                const removedItem = this.items[this.lenght]
                this.items.length = this.lenght
                return removedItem
            }
        }
        print(){
            if(this.lenght === 0){
                console.log("Vazio");
                
            }else{
                return console.log(this.items);
                
            }
        }

}