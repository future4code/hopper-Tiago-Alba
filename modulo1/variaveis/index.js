/* Exercicios de interpretação
1 . 10  / 10  5

2. 10 / 10 / 10  

3.  horasTrabalhadas  p
    valorRecebidoAoDia t */

    let nome 
    let idade 
typeof nome //undefined 
typeof idade //undefined 
console.log (nome , idade)
prompt (" Qual seu nome", nome) // so notei  que como não tem identificação que não precisa de uma resposta basta apertar enter
prompt ("Qual sua idade", idade) // so notei  que como não tem identificação que não precisa de uma resposta basta apertar enter
console.log ("Ola meu nome é ", nome, " minha idade é ", idade)


const corDeRoupa = ("-sim") 
const escovouOsDentes = ("-sim")
const comeuCarne = ("-nao")
console.log ("Você está usando roupa azul hoje?",corDeRoupa ,"Você escovou os dentes hj ?",escovouOsDentes," Voce comeu carne hj ?",comeuCarne)

let a = 10
let b = 25
c = b
d = a
a = c
b = d
console.log ("O novo valor novo de a é ", a) // agora  a = 25
console.log ("O novo valor de b é" ,b ) // agora b = 10
