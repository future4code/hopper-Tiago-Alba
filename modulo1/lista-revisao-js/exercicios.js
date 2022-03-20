// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function ( a, b){
      return a - b
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
let par = array.filter((par)=>{
  return par % 2 === 0
})
return par
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let elevarADois = retornaNumerosPares(array)
 return elevarADois.map(x => x * x)
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let maiorNumero = 0
for (let i = 0; i < array.length; i++) {
if(array[i] > maiorNumero){
    maiorNumero = array[i]
}    
}
return maiorNumero
 } 


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorValor = 0
  let menorValor = 0
  
  if( num1 > num2){
       maiorValor = num1
       menorValor = num2
  
      }else {
   maiorValor = num2
   menorValor = num1
  }
  let divisivel = maiorValor % menorValor === 0 
  let valorRestante = maiorValor - menorValor
  let objeto = {
      maiorNumero: maiorValor,
      maiorDivisivelPorMenor : divisivel,
      diferenca: valorRestante
  }
   return objeto
  }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares =[]
    
  for (let numero = 0 ; numero < n * 2 ; numero++) {
    if( numero % 2 === 0){
  numerosPares.push(numero++)
     }
      }
 return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC){
    return "Equilátero"
    }else if(ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
    return "Isósceles"
    }else{
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let SegundoMaiorMenorNumero = []
    let novoArray = retornaArrayOrdenado(array)
  let segundoMaior = novoArray[novoArray.length -2] 
   SegundoMaiorMenorNumero.push(segundoMaior)
  let segundoMenor = novoArray[1]
  SegundoMaiorMenorNumero.push(segundoMenor)
  return SegundoMaiorMenorNumero
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let anonimo = {...pessoa}
  anonimo.nome = "ANÔNIMO"
  return anonimo  
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let novoArray = [...pessoas]
  let autorizadas = []
for (let i = 0; i <= novoArray.length  ; i++) {
  let podeEntrar = novoArray.shift() 
 if (podeEntrar.idade > 14 && podeEntrar.idade < 60 && podeEntrar.altura > 1.5) {
    autorizadas.push(podeEntrar)}

}
return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  naoAutorizadas =[]
    pessoas.filter((autorizadas)=>{
      if (autorizadas.idade <= 14 || autorizadas.idade >= 60 || autorizadas.altura <= 1.5) {
        naoAutorizadas.push(autorizadas)
        }
    })
     return naoAutorizadas
    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let saldoAtualizado = []
  for (let i = 0; i < contas.length; i++) {
    contas[i].saldoTotal = contas[i].saldoTotal - contas[i].compras
    saldoAtualizado.push(contas[i])
    }
    return saldoAtualizado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}