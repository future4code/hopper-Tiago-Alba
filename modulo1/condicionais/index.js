// Exercicio de interpretação

//EXercicio 1
// A. ele quer saber se o numero é inteiro
// B. Numeros pares
// C. Numeros impares

// Exercicio2
// A. Para buscar e encontar o preço das frutas chamadas pelo usuario
// B. 2.25
// C. não tenho certeza so olhando mesmo =/ mas acredito que quebraria o codigo ja q ele ia encontrar 2 valores 


// Exercicio3
// A. Esta pedido um numero ao usuario
// B. 10 "esse numero passou no teste" e "Essa menssagem é secreta!!!" 
//caso -10 nao respondera nada e dara erro no console
// C. acredito que somente se o numero for menor que 0 o let menssagem nao vai ser lida por estar no scopo do if

//Exercicio de escrita de codigo

// Exercicio 1
{
let idadeUsuario = +prompt("Olá qual a sua idade ?")
if(idadeUsuario >= 18){
console.log("Você pode dirigir")
}else{ console.log("Você não pode dirigir")
}
}
// Exercicio 2
{
let horarioDeEstudo = prompt("OLá me diga seu turno?digitar M (matutino) ou V (Vespertino) ou N (Noturno").toUpperCase()
if(horarioDeEstudo === "M"){
   console.log("Bom Dia!") 
}else if(horarioDeEstudo === "V"){
    console.log("Boa Tarde!")
}else if(horarioDeEstudo === "N"){
    console.log("Boa Noite!")
}else{
    console.log("Turno não encontrado")
}
        
}
// Exercicio 3

let horarioDeEstudo2 = prompt("OLá me diga seu turno?digitar M (matutino) ou V (Vespertino) ou N (Noturno").toUpperCase()
switch(horarioDeEstudo2){
case "M":
console.log("Bom Dia!")
break
case "V":
    console.log ("Boa Tarde!")
    break
    case "N":
        console.log("Boa Noite!")
        break
        default:
            console.log("Turno não encontrado")
            break

}

// Exercicio 4
let generoFilme = prompt(" Que genero de filme vamos ver hj ?").toLocaleLowerCase()
let preco = +prompt("Qual o valor do ingresso ?") <= 15
if(generoFilme && preco){    
    console.log("Bom Filme")
}else{
    console.log("Escolha outro filme:(")
}








