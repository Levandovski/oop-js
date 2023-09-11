function Ninja(nome) {
  return {
    nome,
    atirarShuriken() {
      if (this.startQuantity === 0) return "Suas shurikens acabaram!";

      this.startQuantity--;

      console.log(`${this.nome} atirou: Piuuu piuuu`);
    },
    startQuantity: 100,
    numberLife: 100,
    lessNumberLife() {
      return this.numberLife--;
    },
  };
}

function Rival(nome) {
  return {
    nome,
    atirarShuriken() {
      if (this.startQuantity === 0) return "Suas shurikens acabaram!";

      this.startQuantity--;

      console.log(`${this.nome} atirou: Piuuu piuuu`);
    },
    startQuantity: 100,
    numberLife: 100,
    lessNumberLife() {
      return this.numberLife--;
    },
  };
}

function getRandom() {
  let randomNumber = Math.random();
  let minNumber = 0;
  let maxNumber = 2;
  return Math.floor(randomNumber * (maxNumber - minNumber) + minNumber);
}

let timeout = "";

function fight(opponent1, opponent2) {
  setTimeout(() => {
    let ataque = getRandom();
    console.log(ataque);
    if (ataque === 0) {
      if (opponent1.startQuantity > 0) {
        opponent1.atirarShuriken();
        opponent2.lessNumberLife();
      } else {
        opponent2.atirarShuriken();
        opponent1.lessNumberLife();
      }
    } else {
      if (opponent2.startQuantity > 0) {
        opponent2.atirarShuriken();
        opponent1.lessNumberLife();
      } else {
        opponent1.atirarShuriken();
        opponent2.lessNumberLife();
      }
    }
    if (opponent1.numberLife > 0 && opponent2.numberLife > 0) {
      fight(opponent1, opponent2);
    } else if (opponent1.numberLife > 0) {
      console.log(opponent1.nome + "Venceu a luta");
    } else {
      console.log(opponent2.nome + "Venceu a luta");
    }
  }, 1000);
  console.log(opponent1);
  console.log(opponent2);
}

const ninja = new Ninja("Naruto");
const rival = new Rival("Naruto2");

fight(ninja, rival);
