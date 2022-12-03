const vagas = [];
let i = 1;

function listarVagas() {
  let lista = vagas.reduce((valor, element) => {
    return (
      valor +
      (element.indice +
        " - " +
        element.name +
        " | Candidatos: " +
        element.numCandidatos +
        "\n")
    );
  }, "");

  return lista;
}

function criarVagas(nome, descricao, dataLimite) {
  let vaga = {
    indice: i,
    name: nome,
    descricao: descricao,
    dataLimite: dataLimite,
    numCandidatos: 0,
    candidatos: [],
  };
  i++;
  vagas.push(vaga);
}

function visuzalizarVaga(indice) {
  let filtro = vagas.filter((element) => {
    return element.indice == indice;
  });

  let nomeDosCandidatos = "";
  filtro[0].candidatos.forEach(
    (element) => (nomeDosCandidatos += element + "\n")
  );

  let lista = filtro.reduce((valor, element) => {
    return (
      valor +
      (element.indice +
        " - " +
        element.name +
        " | Descrição: " +
        element.descricao +
        " | Data limite:" +
        element.dataLimite +
        " | Quantidade de Candidatos: " +
        element.numCandidatos +
        " | Nome dos candidatos:\n" +
        nomeDosCandidatos +
        "\n")
    );
  }, "");

  return lista;
}

function inscreverCandidato(nome, indice) {
  detalhesVaga = "";
  vagas.forEach((element) => {
    if (element.indice === indice) {
      detalhesVaga +=
        element.indice +
        " - " +
        element.name +
        " | Candidatos: " +
        element.numCandidatos;
    }
  });
  confirm(detalhesVaga);

  if (confirm) {
    vagas.forEach((element) => {
      if (element.indice === indice) {
        element.candidatos.push(nome);
        element.numCandidatos++;
      }
    });
  }
}

function excluirVaga(indice) {
  detalhesVaga = "";
  vagas.forEach((element) => {
    if (element.indice === indice) {
      detalhesVaga +=
        element.indice +
        " - " +
        element.name +
        " | Candidatos: " +
        element.numCandidatos;
    }
  });
  alert(detalhesVaga);

  confirm("Você deseja excluir a vaga?");
  if (confirm) {
    vagas.forEach((element) => {
      if (element.indice === indice) {
        vagas.splice(indice - 1, 1);
      }
    });
  }
}

const menu = function () {
  do {
    var escolha = parseInt(
      prompt(
        "Menu\n" +
          "\nEscolha uma das opções:" +
          "\n1 - Listar vagas disponíveis" +
          "\n2 - Criar nova vaga" +
          "\n3 - Visualizar uma vaga" +
          "\n4 - Inscrever um cadidato em uma vaga" +
          "\n5 - Excluir uma vaga" +
          "\n6 - Sair"
      )
    );

    switch (escolha) {
      case 1:
        alert(listarVagas());
        break;

      case 2:
        let nome = prompt("Digite um nome para vaga:");
        let descricao = prompt("Digite uma descrição para a vaga:");
        let dataLimite = prompt("Digite uma data limite para a vaga");
        confirm("Você confirma essa ação?");
        if (confirm) {
          criarVagas(nome, descricao, dataLimite);
        }
        break;

      case 3:
        let indice = parseInt(prompt("Digite o número do indice da vaga:"));
        alert(visuzalizarVaga(indice));
        break;

      case 4:
        let nomeCanditado = prompt("Digite o nome do candidato:");
        let indiceDaVaga = parseInt(prompt("Digite o indice da vaga"));
        inscreverCandidato(nomeCanditado, indiceDaVaga);
        break;

      case 5:
        let excluirIndice = parseInt(prompt("Digite o indice da vaga"));
        excluirVaga(excluirIndice);
        break;

      case 6:
        alert("Encerrando...");
        break;
      default:
        alert("Aconteceu algum erro");
    }
  } while (escolha !== 6);
};
menu();
