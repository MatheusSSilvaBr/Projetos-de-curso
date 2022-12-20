const Author = require("./Author");

const paulo = new Author("Paulo Andre");

const carros = paulo.addPosts("Carros");

carros.addComments("Maria", "Que carro lindo");
carros.addComments("Jose", "Eu tenho um modelo parecido");

console.log(paulo);
console.log(carros);
