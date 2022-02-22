/*  A. vai dar erro não foi dado valor ao array

 B. null

 c . vai me dar o conteudo do array e sua posição

 D. Não vai encontrar o valor de I ja que não foi colocado dentro de[]
 então vai manter a mesma quantia 

 E. não tenho ideia 

 D. tambem não sei 

 2. exercicios

 vai transformar todas a letras para maiusculas e trocar todas as letras A por I
 e mostrar o tamanho da frase !


*/
{
const nome = prompt (" Me diga seu nome! ")
const email = prompt ("Me informe seu email!")
const resposta = (` O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} `)
console.log (resposta )


}


function trocar(comidas, from, to) {
    comidas.splice(to, 0, comidas.splice(from, 1)[0]);
    return comidas;
};
    
 

{


   let comidas = [ "Pizza" ,"Camarão" , "Churrasco", "Salame", "Hamburger" ]

console.log ( comidas )

console.log (` Essas são as minhas comidas favoritas ${comidas}`)

let pergunta = prompt ( "Qual sua comida favorita ?")
comidas.push (pergunta)
console.log (comidas)

comidas = trocar(comidas, 5 , 1)



console.log (comidas)


}

let listaDeTarefas = []

let pergunta1 = prompt ("Me fale 3 tarefas que vc precisa realizar hj em sequencia ")
let pergunta2 = prompt ("Tarefa 2")
let pergunta3 = prompt ("tarefa 3")

listaDeTarefas.push (pergunta1, pergunta2, pergunta3)

console.log (listaDeTarefas)
let pergunta4 = prompt (" Do indice 0 ~ 2 qual tarefa foi realizada ?" )

listaDeTarefas.splice(pergunta4, 1)

console.log (listaDeTarefas)
