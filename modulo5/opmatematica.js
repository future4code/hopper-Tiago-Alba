const tipoDaOperacao = process.argv[2]
const primeiroNumero = +process.argv[3]
const segundoNumero = +process.argv[4]

switch (tipoDaOperacao) {
    case "add":
        console.log(`Resposta ${primeiroNumero + segundoNumero}`);
        break;
    case "sub":
        console.log(`Resposta ${primeiroNumero - segundoNumero}`);
        break;
    case "mult":
        console.log(`Resposta ${primeiroNumero * segundoNumero}`);
        break;
    case "div":
        console.log(`Resposta ${primeiroNumero / segundoNumero}`);
}