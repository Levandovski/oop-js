function Ninja(nome) {
  return {
    nome,
    atirarShuriken() {
      if (this.startQuantity === 0) return "Suas shurikens acabaram!";

      this.startQuantity--;

      return `${this.nome} atirou: Piuuu piuuu`;
    },
    startQuantity: 5,
  };
}

const ninja1 = new Ninja("Naruto");

console.log(ninja1.atirarShuriken());
console.log(ninja1);

console.log(ninja1.atirarShuriken());
console.log(ninja1);

console.log(ninja1.atirarShuriken());
console.log(ninja1);

console.log(ninja1.atirarShuriken());
console.log(ninja1);

console.log(ninja1.atirarShuriken());
console.log(ninja1);

console.log(ninja1.atirarShuriken());
console.log(ninja1);
