let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    ligar(){
        console.log("O carro ligou");
    },
    desligar: function(){
        console.log("O carro desligou");
    }
};

carro.ligar();
carro.desligar();