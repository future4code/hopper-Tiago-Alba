export class Fila {
    constructor(
        public items: any = [],
        public length: number = 0
    ) { }

    isEnpyt() {
        if (this.length === 0) {
            console.log("Vazio!");

        } else {
            console.log("não está Vazio!");

        }
    }
    enqueue(item: any) {
        this.items[this.length] = item
        this.length++

    }
    dequeue() {
        const removedItem = this.items[0]
        for (let i = 0; i < this.length; i++) {
            this.items[i] = this.items[i+1]
        }
        this.length--
        this.items.length = this.length
        return removedItem 
    }
    print() {
        if(this.length === 0){
            return console.log("Vazio");
            
        }else{
            return console.log(this.items);
            
        }

     }



}