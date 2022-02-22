// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura1 = prompt ("Digite a altura de um retangulo ")
  const largura = prompt ( 'Digite a largura de um retangulo')

  console.log (altura1*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const  anoAtual =  +prompt (" Em que ano estamos ?" )
  const anoNascimento = +prompt ( "Em que ano vc nasceu ?")


  console.log ( anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / ( altura * altura )
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
nome = prompt ("Qual seu nome ?")
  idade = prompt ("Qual sua idade ?")
   email = prompt ( "Qual seu Email ?")
   info = (`Meu nome é ${nome} tenho ${idade} anos, e o meu email é ${email}`)



console.log (info)


  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."



}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
cor = prompt ( " me fale suas 3 cores favoritas")
cor2 = prompt( "")
cor3 = prompt("")
let cores = [
cor , cor2 , cor3

]


console.log (cores)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui


return (string.toUpperCase ())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let divisão = custo / valorIngresso
return divisão


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

let comparando = (string1.length === string2.length )


return (comparando)


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return (array[0])

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  let ultimo = array [array.length -1]
  return ultimo





}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
console.log (array)


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

} 