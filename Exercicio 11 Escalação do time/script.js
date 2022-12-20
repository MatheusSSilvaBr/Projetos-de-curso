let p = document.querySelector("#position");
let n = document.getElementById("name");
let num = document.getElementById("numberShirt");
let removerP = document.getElementById("removerPlayer");
let ul = document.querySelector("ul");

function escalar() {
  let position = p.value;
  let namePlayer = n.value;
  let numberShirt = num.value;

  if (position === "" || namePlayer === "" || numberShirt === "") {
    alert(
      "Preencha todos os campos necessários para cadastrar um novo jogador"
    );
    return;
  }

  confirm("Você deseja escalar esse jogador ?");
  if (confirm) {
    incluirJogador(position, namePlayer, numberShirt);
  }

  p.value = "";
  n.value = "";
  num.value = "";
}

function incluirJogador(position, namePlayer, numberShirt) {
  const jogadorLi = document.createElement("ul");
  jogadorLi.id = numberShirt;

  const positionLi = document.createElement("li");
  positionLi.innerText = "Posição: " + position;

  const numberLi = document.createElement("li");
  numberLi.innerText = "Número: " + numberShirt;

  const title = document.createElement("h3");
  title.innerText = namePlayer;

  title.append(positionLi, numberLi);
  jogadorLi.append(title);
  ul.append(jogadorLi);
}

function remover() {
  let numId = removerP.value;
  if (numId === "") {
    alert("Preencha o campo 'Número da camisa'!");
    return;
  }

  confirm("Você deseja remover esse jogador ?");
  if (confirm) {
    removerJogador(numId);
  }

  removerP.value = "";
}

function removerJogador(num) {
  let id = num;
  let jogadorId = document.getElementById(id);

  if (jogadorId) {
    ul.removeChild(jogadorId);
  } else {
    alert("Insira um número válido");
  }
}
