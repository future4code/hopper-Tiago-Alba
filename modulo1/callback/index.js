console.log( "ola mundo!")

/* --------------------Exercicos Interpretação -------------------------

-----------------------Exercicio 1 --------------------------------
A. vai mostrar os itens dentro do array e suas respectivars posiçoes

-----------------------Exercicio 2 ---------------------------------
A. Vai mostar todos os nomes de dentro do array

-----------------------Exercicio 3 ---------------------------------
A. Ele ira mostar todos os nomes exeto "Chijo"


*/
//---------------------------Exercicios de Escrita ------------------------
//----------------------------Exercicio 1 ---------------------------------

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//A. -------------------------------------------------
 const usuario = pets.map((item)=> {
    return item.nome
 })
  console.log(usuario)

//B -----------------------------------------------------
function tipo(cachorro){
  return cachorro.raca === "Salsicha"}
const salsicha = pets.filter(tipo)

console.log(salsicha)
//C -----------------------------------------------------
function desconto(cachorro){
  return cachorro.raca === "Poodle"
}
const podle = pets.filter(desconto)
const ganhouDesconto = podle.filter((item)=>{
  console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
})
//-----------------------Exercicio 2 ----------------------------
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//A.-----------------------------------------------------------
const nome = produtos.map((item)=>{
  return item.nome
})
console.log(nome)
//B ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const promocao = produtos.map((mercadorias)=>{
  const desconto = mercadorias.preco  / 95
  const novo = [
    { nome: mercadorias.nome,
      preco: mercadorias.preco - desconto}
  ]
  
return novo

})
console.log(promocao)
//C --------------------------------------------------------
const bebida = produtos.filter((prot)=>{
  return prot.categoria === "Bebidas"
})
console.log (bebida)
//D --------------------------------------------------------
const produtosype = produtos.filter((prod)=>{
  return prod.nome.includes("Ypê")
})
console.log(produtosype)
//E ------------------------------------------------------------
const compre = produtosype.map((ype)=>{
  return `Compre ${ype.nome} por ${ype.preco}`
  
})
console.log(compre)