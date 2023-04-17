let pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Lima',
    idade:'24'
}

let pessoa2 = {
    idade:'23'
}

//Copia o objeto iteiro e também pedaços
Object.assign(pessoa2, pessoa1);

pessoa2.nome = "Jesse";

console.log(pessoa2);
console.log(pessoa1);