function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function(){
        console.log("Atirou a " + this.arma);
    }
}


let ninja1 = new Ninja("Naruto", "shiriken");

console.log(ninja1.nome);
ninja1.atirarArma();

let ninja2 = new Ninja("DragonBall", "Explosão");

console.log(ninja2.nome);
ninja1.atirarArma();