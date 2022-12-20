const Character = require("./Character");

class Warrior extends Character {
  constructor(shield, name, life, attack, defense) {
    super(name, life, attack, defense);
    this.shield = shield;
    this.position = ["attack", "defense"];
    this.positionCurrent = 0;
  }

  actionAttack(character) {
    if (this.position[this.positionCurrent] === "defense") {
      return;
    }

    let damage = 0;
    if (character instanceof Warrior && character.positionCurrent === 0) {
      damage = this.attack - character.defense;
    } else if (character instanceof Warrior) {
      damage = this.attack - character.defense - character.shield;
    } else {
      damage = this.attack - character.defense;
    }

    if (damage > 0) {
      character.life -= damage;
      console.log("Atack bem sucedido!");
    } else {
      console.log(
        "O ataque falhou! A defesa do alvo é mais alta que o seu ataque!"
      );
    }
  }

  changePosition() {
    if (this.positionCurrent === 0) {
      this.positionCurrent = 1;
    } else {
      this.positionCurrent = 0;
    }
  }
}

module.exports = Warrior;
