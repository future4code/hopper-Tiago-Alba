import { Empilhamento } from "./services/Empilhamento";
import { Fila } from "./services/Fila";
import { LinkedList, NodeItem } from "./services/ListaLigada";


const node = new NodeItem(1)
const linkedList = new LinkedList(node)

linkedList.add(5)

linkedList.add(8)
linkedList.add(10)
linkedList.findAll()

const pilha = new Empilhamento()

pilha.push(5)
pilha.push(10)
pilha.push(8)
pilha.push(40)
pilha.isEnpty()
pilha.print()
pilha.pop()
pilha.print()

const fila = new Fila()

fila.enqueue(10)
fila.enqueue(3)
fila.enqueue(5)
fila.enqueue(40)
fila.enqueue(30)
fila.print()
fila.dequeue()
fila.dequeue()
fila.print()
