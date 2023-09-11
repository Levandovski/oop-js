function Ninja(nome) {
  return {
    nome,
    atirarShuriken() {
      return `${this.nome} atirou: Piuuu piuuu`;
    },
  };
}

const ninja1 = new Ninja("Naruto");
const ninja2 = new Ninja("Naruto2");

console.log(ninja1.atirarShuriken());
console.log(ninja2.atirarShuriken());
