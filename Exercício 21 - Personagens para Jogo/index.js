const Character = require("./Character.js");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior.js");

const rayzen = new Thief("rayzen", 100, 60, 30);

const garen = new Warrior(50, "garen", 150, 40, 40);

garen.changePosition();

rayzen.actionAttack(garen);
console.log(garen);
