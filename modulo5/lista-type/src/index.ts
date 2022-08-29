//exercicio 1
function novaPessoa(name: string, age: string) {
    const namePerson = name
    const agePerson = age.split("/", 3)
    return console.log(`"Olá me chamo ${namePerson}, nasci no dia ${agePerson[0]} do mês de ${agePerson[1]} do ano de ${agePerson[2]}`);

}
novaPessoa("tiago", "03/05/2018")
//-------------------------------------//-------------------------------------//-----------
//exercicio 2
function qualquer(qualquer: any) {
    return console.log("nenhuma");

}
qualquer(2)
//-------------------------------------//-------------------------------------//-----------
//exercicio 3
enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comedia",
    ROMANCE = "romance",
    TERROR = "terror"
}
type filmes = {
    
    name: string,
    anoLancamento: number,
    genero: string,
    pontuacao?:number 

}
const listaDeFilme: any = []
function addFilme(novoNome: string,lancamento:number,generoFilme: GENERO ,novaPontuacao?: number ){
let novoFilme: filmes = {
    name : novoNome,
    anoLancamento : lancamento,
    genero : generoFilme,
    pontuacao : novaPontuacao 
}
return listaDeFilme.push(novoFilme)
};
addFilme("Duna",2022,GENERO.DRAMA);

console.log(listaDeFilme);
//-------------------------------------//-------------------------------------//-----------
// exercicio 4
enum SETOR  {
    MARKETING = 'marketing',
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Colaborador = {
    nome: string,
    salário: number,
    setor: SETOR,
    presencial: boolean
}
type Colaboradores = Colaborador[]

const colaboradores : Colaboradores = [
{nome: "Marcos",salário: 2500, setor: SETOR.MARKETING, presencial: true},
 { nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
 { nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
 { nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
 { nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
 { nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
 { nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }

]
function filtandoMarketPresencial(presencial:Colaboradores){
   let separandoPresencial =  presencial.filter(colaborador => colaborador.presencial === true && colaborador.setor === SETOR.MARKETING )
    return (separandoPresencial)
}
console.table(filtandoMarketPresencial(colaboradores));
//-------------------------------------//-------------------------------------//-----------
//exercico 5
type Cadastro = {
    name: string,
    email: string,
    role: string
}
type PessoasCadastradas = Cadastro[] 
type Email = string[]
const cadastros : PessoasCadastradas = [
    {name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"} 
];
function procurandoEmailDoAdmin(admin:PessoasCadastradas){
    const emailAdmin : Email  = []
    for (let i = 0; i < admin.length; i++) {
        const email = admin[i];
        if(email.role === "admin"){
            emailAdmin.push(email.email)
        }
    }
    return emailAdmin
}
console.log(procurandoEmailDoAdmin(cadastros));
