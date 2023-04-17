function Arvores(arvore = "Pinheiro") {
  this.arvore = arvore;
  return this.arvore;
}

function Plantas(planta = "Margarida") {
  this.planta = planta;
  return this.planta;
}

let arvore = new Arvores();
let planta = new Plantas();

console.log(arvore instanceof Arvores ? true : false);
console.log(arvore instanceof Plantas ? true : false);
console.log(planta instanceof Plantas ? true : false);
