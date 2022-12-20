const Character = require("./Character.js");
const Warrior = require("./Warrior.js");

class Thief extends Character {
  constructor(name, life, attack, defense) {
    super(name, life, attack, defense);
  }

  actionAttack(character) {
    let damage = 0;
    if (character instanceof Warrior && character.positionCurrent === 0) {
      damage = this.attack * 2 - character.defense;
    } else if (character instanceof Warrior) {
      damage = this.attack * 2 - character.defense - character.shield;
    } else {
      damage = this.attack * 2 - character.defense;
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
}

module.exports = Thief;
