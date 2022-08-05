const novaTarefa = process.argv[2]

const tarefas = [
    "comprar Leite"
]

if (tarefas){
     tarefas.push(novaTarefa) 
     console.log("Tarefa adicionada com sucesso");  
}
console.table(tarefas)