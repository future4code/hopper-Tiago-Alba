```js
_function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
    const notaPeso2 = p1 * 2
    const notaPeso3 = p2 * 3
    const soma = ex + notaPeso2 + notaPeso3
   const media = soma / 6
   if( media >= 9 ){
     return "A"
   }else if( media >= 7.5 ){
     return  "B"
   }else if( media >= 6 ){
     return "C"
   }else{
     return "D"
   }
   }´´´