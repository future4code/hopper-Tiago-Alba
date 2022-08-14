
// Exercicio 1
//a
const minhaString: string = "oie"
// Ele não aceita outra coisa que não seja uma string
//b
const meuNumero : number = 3
// Para que ele aceite outras coisas a variavel colocar any no lugar de number
// c
let person : { nome: string , idade : number, corFavorita: string} = {
nome: "Tiago",
idade : 37,
corFavorita: "Roxo"
}
type Pessoa = {
nome: string,
idade: number,
corFavorita: string
}
let person2 : Pessoa = {
    nome: "Laisla",
    idade: 22 ,
    corFavorita: "Branco"
}
let person3 : Pessoa = {
    nome: "Cleiton",
    idade: 25 ,
    corFavorita: "Azul"
}

let person4 : Pessoa = {
    nome: "Isa",
    idade: 22,
    corFavorita: "Amarelo"
}
//D
enum Cores {
    BRANCO = "Branco",
    AZUL = "Azul",
    ROXO = "Roxo",
    AMARELO = "Amarelo"
}
person = {
    nome: "Tiago",
    idade: 37,
    corFavorita: Cores.ROXO
}
person2 = {
    nome: "Laisla",
    idade: 22 ,
    corFavorita: Cores.BRANCO
}
person3 = {
    nome: "Cleiton",
    idade: 25 ,
    corFavorita: Cores.AZUL
}
person4 = {
    nome: "Isa",
    idade: 22,
    corFavorita: Cores.AMARELO
}
// ------------------------//--------------------//------------------------// ---------
//Exercicio 2
//a
function obterEstatisticas (numeros : number[] ){
const numerosOrdenados : number[]  = numeros.sort(
    (a , b) => a - b
)
let soma: number = 0
for( let num of numeros){
    soma += num
}
const estatisticas : {maior: number, menor: number, media: number} = {
    maior: numerosOrdenados[ numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
}
return estatisticas
}
// Entrada é uma array de numeros Saida estatisticas desses numeros

//b  não entendi a questão

//c 

let novoNumero : number[] = [21, 18, 65, 44, 15, 18]

const amostraDeIdades : {numeros: number[] , obterEstatisticas: object } = {
        numeros: [21, 18, 65, 44, 15, 18],
        obterEstatisticas : obterEstatisticas(novoNumero)
}
console.log(amostraDeIdades)

type Post =  {
    autor: string,
    texto: string

}
type Posts = Post[]

const  posts : Posts = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
      },
      {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
      },
      {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
      },
      {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
      },
      {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
      }
]
function buscarPostsPorAutor(posts:Posts, autorInformado :string ) {
    return posts.filter(
      (post) => {
        return post.autor.toLowerCase() === autorInformado.toLowerCase()
      }
    )
  }
 
console.log(buscarPostsPorAutor(posts,"lord Voldemort"));

