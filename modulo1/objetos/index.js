// Exercicio 1 
//A = "Matheus Nachtergaele"  "Virginia Cavendish" "14h"

// Exercicio 2
//A = juca , 3 , srd
//juba , 3 , srd
//jubo , 3 , srd
//B = faz uma copia do Objeto

// Exercicio 3
//A = false , undefained
//B = Foi feito a busca porem não foi definido todos os parametros 
// no caso altura nao existe dentro de pessoa porem o "backender" foi encontrado 

//Exercicio de escrita de codigo
//Exercicio 1

{const person = {

    name: "Tiago",
    surName:["Ti" ,"Ty" ,"TiTi"] 



}
console.log(`Eu sou ${person.name}, mas pode me chamar de:${person.surName[0]}, ${person.surName[1]} ou ${person.surName[2]} `)

}

// Exercicio 2 

{

    const pessoa1 = { 

        nome: "Tiago" ,
        idade: 36,
        trabalho: "Serralehiro"



}

const pessoa2 = { 

    nome: "Andherson",
    idade: 35,
    trabalho: "programador"



} 

function minhaFuncao(){

console.log(pessoa1.nome, ',', pessoa1.nome.length,",", pessoa1.idade,",", pessoa1.trabalho, ',', pessoa1.trabalho.length  )
console.log(pessoa2.nome, ',', pessoa2.nome.length,",", pessoa2.idade,",", pessoa2.trabalho, ',', pessoa2.trabalho.length  )

}

minhaFuncao("pessoas")
}


// Exercicio 3 
{

var carrinho = []

let fruta1 = {

    nome: "Morango",
    disponibilidade: true
    
}
let fruta2 = {

nome: "kiwi", 
disponibilidade: true


}

let fruta3 = {

nome: "Amora",
disponibilidade: true

}
function inserirNoCarrinho(nomefruta1, nomefruta2, nomefruta3){
 let adicionar =  carrinho.push(nomefruta1, nomefruta2, nomefruta3)

return adicionar
}

 inserirNoCarrinho(fruta1 , fruta2, fruta3)


console.log(carrinho)

}

// Desafio

// exercicio 1

{
function pesquisa(){
let nome = prompt("Ola usuario qual seu nome?")
let idade = +prompt( "Ola usuario qual a sua idade?")
let profissao = prompt("Ola usuario qual sua profissão ?")


let pessoa = {
    nome: nome,
    idade: idade,
    profissao: profissao

}


return pessoa

}
console.log(pesquisa())

}

// exercicio 2
{
let filme1 = {

nome: "Senhor dos Aneis e a sociadade do anel",
anoLancamento: 2002
}
let filme2 = {

nome: "Senhor dos Aneis o Retorno do rei",
anoLancamento: 2003



}

function comparadorIdade(number1 , number2){

let resposta = number1 <= number2

return resposta
// me perdi nessa funçao nao consigo executar 2 coias na mesma funçao
}

console.log("O primeiro filme foi lançado antes do segundo?",
 comparadorIdade(filme1.anoLancamento, filme2.anoLancamento))
 console.log("O primeiro filme foi lançado no mesmo ano?",
 comparadorIdade(filme1.anoLancamento , filme2.anoLancamento))

}
