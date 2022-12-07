export class NodeItem {
    constructor(
        public value : any,
        public next : NodeItem | null = null
    ){}
}

export class LinkedList  {
constructor(
    public head:NodeItem | null = null
){}

    add(value:any){
        const newItem = new NodeItem(value)
        if(!this.head){
            this.head = newItem
        }else{
            let start = this.head
            while(start.next){
                start = start.next
            }
            start.next = newItem
        }
    }
    find(value:any){
        let startNode = this.head
        while(startNode!.next !== null && startNode!.value !== value){
            startNode = startNode!.next
        }
        return startNode
    }
    findAll(){
        let startNode = this.head
        const novo = [startNode?.value]

        while(startNode!.next !== null){
           
            startNode = startNode!.next
            novo.push(startNode.value)
        }
        
           return console.log(novo);
            
    }
}