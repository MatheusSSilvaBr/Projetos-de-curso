class Character {
  constructor(name, life, attack, defense) {
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
  }

  actionAttack(character) {
    const dif = this.attack - character.defense;

    if (dif > 0) {
      character.life -= dif;
      console.log("Atack bem sucedido!");
    } else {
      console.log(
        "O ataque falhou! A defesa do alvo é mais alta que o seu ataque!"
      );
    }
  }
}
module.exports = Character;
