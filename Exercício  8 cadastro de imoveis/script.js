let menu;
let imoveisCadastrados = [];
let id = 0;

class Imovel {
  constructor(id, nomeProp, quartos, banheiros, garagem) {
    this.id = id;
    this.nomeProp = nomeProp;
    this.quartos = quartos;
    this.banheiros = banheiros;
    this.garagem = garagem;
  }
}

do {
  menu = prompt(
    "Número de imóveis cadastrados: " +
      id +
      "\nEscolha uma opção:" +
      "\n1 - Adicionar imóvel" +
      "\n2 - Mostrar imóveis salvos" +
      "\n3 - Para sair"
  );

  switch (menu) {
    case "1":
      let nomeProprietario = prompt("Digite o nome do proprietário:");
      let numeroQuartos = prompt("Digite o número de quartos:");
      let numeroBanheiros = prompt("Digite o número de banheiros:");
      let garagem = prompt("Digite o número de vagas na garagem:");

      let confirmacao = confirm("Você deseja salvar esse imóvel ?");

      if (confirmacao) {
        let imovel = new Imovel(
          id,
          nomeProprietario,
          numeroQuartos,
          numeroBanheiros,
          garagem
        );

        imoveisCadastrados.push(imovel);
        id++;
      }
      break;
    case "2":
      for (let i = 0; i < imoveisCadastrados.length; i++) {
        alert(
          "Id: " +
            imoveisCadastrados[i]["id"] +
            "\nNome do proprietário: " +
            imoveisCadastrados[i]["nomeProp"] +
            "\nNumero de quartos: " +
            imoveisCadastrados[i]["quartos"] +
            "\nNumero de banheiros: " +
            imoveisCadastrados[i]["banheiros"] +
            "\nNumero de vagas na garagem: " +
            imoveisCadastrados[i]["garagem"]
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Ocorreu algum erro!");
  }
} while (menu !== "3");
