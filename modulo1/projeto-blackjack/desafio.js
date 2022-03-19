/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    
    function rodandoJogo(cartasDoJogador, cartasDoComputador) {
  let continuarJogando = true 
  let scoreJogador = cartasDoJogador
  .map((carta) => carta.valor)
  .reduce(
    (valorAtual, valorDaIteracaoAnterior) =>
      valorAtual + valorDaIteracaoAnterior
  )
  let scoreComputador = cartasDoComputador
  .map((carta) => carta.valor)
  .reduce(
    (valorAtual, valorDaIteracaoAnterior) =>
      valorAtual + valorDaIteracaoAnterior
  )

      while (continuarJogando)  {

        let novaCartaUsuario = comprarCarta()
        scoreJogador = scoreJogador + novaCartaUsuario.valor
        cartasDoJogador.push(novaCartaUsuario)
        let novaCartaComputador = comprarCarta()
        scoreComputador = scoreComputador + novaCartaComputador.valor
       cartasDoComputador.push(novaCartaComputador)
        if(scoreJogador <= 21){
         let nipeCartaUsuario = cartasDoJogador.map((nipe)=>{
            return nipe.texto
         })
         
            
         
         continuarJogando = confirm(`Suas cartas são ${nipeCartaUsuario} a primeira carta do computador é ${cartasDoComputador[0].texto} gostaria de mais uma carta ? `)
        }else{
           continuarJogando = false
           
        }
     
      }
      console.log("Soma:", scoreComputador, "Cartas:", cartasDoComputador)

      console.log("Soma:", scoreJogador, "Cartas:", cartasDoJogador)
    }
    
    const cartasDoUsuario = []
    
    const cartasDoComputador = []
    
    const primeiraCartaUsuario = comprarCarta()
    const segundaCartaUsuario = comprarCarta()
    cartasDoUsuario.push(primeiraCartaUsuario)
    cartasDoUsuario.push(segundaCartaUsuario)
   
    const primeiraCartaComputador = comprarCarta()
    const segundaCartaComputador = comprarCarta()
    cartasDoComputador.push(primeiraCartaComputador)
    cartasDoComputador.push(segundaCartaComputador)
    
    console.log("Boas vindas ao BlackJack!")
    const start = confirm("Quer iniciar uma nova rodada?")
    
    if (start){
       let somaUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
       let somaComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
       let primeiroNipeUsuario = primeiraCartaUsuario.texto
       let segundoNipeUsuario = segundaCartaUsuario.texto
       let primeiroNipeComputador = primeiraCartaComputador.texto
       
       if (somaUsuario === 21){
console.log( "CVoce Venceu")
       }
       if(somaUsuario === somaComputador){
console.log("Empate!")
       }
       if(somaUsuario < 21){
            
        let comtinuar =  confirm(`Suas cartas são ${primeiroNipeUsuario} ${segundoNipeUsuario} a primeira carta do computador é ${primeiroNipeComputador} gostaria de mais uma carta ?`) 
    if(comtinuar){
       rodandoJogo(cartasDoUsuario , cartasDoComputador)

    }
       }else if( somaUsuario > somaComputador){
       console.log ("Voce Ganhou")

          
       }else{
          console.log ("Voce perdeu!")
       }
      
       

    }else{
       console.log("Voce perdeu !")
    }
    
   