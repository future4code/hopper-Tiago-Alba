/* 
1. exercicio
a. 10 
a. 100 
b. acredito que nada ja que sem console.log ele não tem nada a imprimir

2 exercicio

a. Ele serve pra procurar uma palavra chave independente se tem maiuscula ou minuscula
da resposta do usuario no caso em questão "cenoura"
b. i. true
   ii. true
   ii. false

*/
//exercicio 1
// A
function sobremim() {

    console.log ("Eu sou Tiago, tenho 36 anos, moro em Caraguatatuba e sou estudante.") 



}

{
sobremim()

}
// B
function mostrarConsole(nome, idade, endereco, profissao ) {

    return `Eu sou ${nome} tenho ${idade} moro em ${endereco} e sou ${profissao}`
}
{

    let resposta  = mostrarConsole("tiago" , 36 , "Av.Brasilia 1025" , "Serralheiro")

console.log(resposta)

}
// exercicio 2
// A
{
function soma(number1 , number2) {

let soma = (number1 + number2)

return soma


}
console.log(soma(5, 3))

}
//B 
{

function maiorIgual(numero1 , numero2){

let comparando = (numero1 >= numero2)

return comparando

}

console.log(maiorIgual(5 , 7))

}

//C

{

    function par(number) {

        let par = number% 2 === 0 
    
    return par
    }

console.log(par(20))

}





//D
{

function verificando(seuNome){
let quantidade = seuNome.length
let tamanho = seuNome.toUpperCase()
  resposta = tamanho + quantidade 
return resposta
}

console.log(verificando("Tiago"))



}
// exercicio 3
{
const parametro1 = +prompt("Me fale um numero")

const parametro2 = +prompt("me fale um segundo numero")

{
function somar(parametro1, parametro2){

return parametro1 + parametro2

}

}

{
function diferent(parametro1, parametro2){

    return parametro1 === parametro2
    
    }
 
}

{
    function multiplicacao(parametro1, parametro2){

        return parametro1 * parametro2
 
        
        }

    }


    {

        function divisao(parametro1, parametro2){

            return parametro1 / parametro2
            
            }
     
        }
            console.log(


somar(parametro1, parametro2),
diferent(parametro1, parametro2),
multiplicacao(parametro1, parametro2),
divisao(parametro1, parametro2)


            )







}





