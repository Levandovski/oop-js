function criarArvore(especie, temFruto){
    return {
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore('Laranjeira', true);

//Constructor Function
function Heroi(nome, classe){
    this.nome = nome;
    this.classe = classe;
}

let jaspion = new Heroi("Jaspion", "Robo");

console.log(laranjeira instanceof criarArvore);
console.log(laranjeira instanceof Object);
console.log(jaspion instanceof Heroi);