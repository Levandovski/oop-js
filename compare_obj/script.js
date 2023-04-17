function Ninja(nome, arma){
    this.nome = nome;
    this.armar = arma;
};

const naruto = new Ninja("Naruto", "Shuriken");
const rockelee = new Ninja("Rocke Lee", "punhos");
const cloneDoNaruto = new Ninja("Naruto", "Shuriken");
const cloneVerdadeiroNaruto = naruto;
console.log(naruto  === rockelee);
console.log(naruto  === cloneDoNaruto);
console.log(naruto  === cloneVerdadeiroNaruto);
