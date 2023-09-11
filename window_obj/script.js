//Entra no escopo global
var teste = "Oi";

console.log(this.teste);

//Nao entram no escopo global
let teste2 = "oi";
const teste3 = "OI";

console.log(window);