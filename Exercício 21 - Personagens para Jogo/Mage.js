const Character = require("./Character");

class Mage extends Character {
  constructor(magicPoint, name, life, attack, defense) {
    super(name, life, attack, defense);
    this.magicPoint = magicPoint;
  }

  actionAttack(character) {
    let damage = 0;

    if (character instanceof Warrior && character.positionCurrent === 0) {
      damage = this.attack + this.magicPoint - character.defense;
    } else if (character instanceof Warrior) {
      damage =
        this.attack + this.magicPoint - character.defense - character.shield;
    } else {
      damage = this.attack + this.magicPoint - character.defense;
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

  heal(character) {
    const healed = this.magicPoint * 2;

    character.life += healed;
    console.log(character.name + " foi curado!");
  }
}

module.exports = Mage;
