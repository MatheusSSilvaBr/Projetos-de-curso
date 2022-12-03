function areaTri(base, altura) {
  return areaRet(base, altura) / 2;
}

function areaRet(base, altura) {
  return base * altura;
}

function areaTrap(base1, base2, altura) {
  return ((base1 + base2) * altura) / 2;
}

function areaCirc(raio) {
  let pi = 3.14;

  return pi * (raio * raio);
}

function solicitar(texto) {
  return parseInt(prompt(texto));
}

do {
  var escolha = prompt(
    "Escolha uma das opções:" +
      "\n1 - Área do triângulo" +
      "\n2 - Área do retângulo" +
      "\n3 - Área do quadrado" +
      "\n4 - Área do trapézio" +
      "\n5 - Área do cículo" +
      "\n6 - Sair"
  );

  switch (escolha) {
    case "1":
      let primeiro1 = solicitar("Digite a primeira medida: ");
      let segundo1 = solicitar("Digite a segunda medida: ");
      alert("A área do triângulo é " + areaTri(primeiro1, segundo1));
      break;

    case "2":
      let primeiro2 = solicitar("Digite a primeira medida: ");
      let segundo2 = solicitar("Digite a segunda medida: ");
      alert("A área do retângulo é " + areaRet(primeiro2, segundo2));
      break;

    case "3":
      let primeiro3 = solicitar("Digite o lado: ");
      alert("A área do quadrado é " + areaRet(primeiro3, primeiro3));
      break;

    case "4":
      let primeiro4 = solicitar("Digite a primeira base: ");
      let segundo4 = solicitar("Digite a segunda base: ");
      let terceiro4 = solicitar("Digite a altura: ");
      alert("A área do trapézio é " + areaTrap(primeiro4, segundo4, terceiro4));
      break;

    case "5":
      let primeiro5 = solicitar("Digite o raio: ");
      alert("A área do circulo é " + areaCirc(primeiro5));
      break;

    case "6":
      alert("Encerrando ...");
      break;

    default:
      alert("Ocorreu um erro!");
  }
} while (escolha != "6");
