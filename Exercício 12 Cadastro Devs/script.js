const buttonAdiconarTec = document.getElementById("adicionarTecnologia");
const buttonCadastrar = document.getElementById("cadastrar");
const form = document.getElementById("formMain");
let nomeDevInput = document.getElementById("nomeDev");

let contTecnoligias = 0;
let devs = [];

function adicionarTec() {
  //Adicionar Nome da Tecnologia
  const div = document.createElement("div");
  const labelTexto = document.createElement("label");
  labelTexto.innerText = "Nome da Tecnologia:";
  const campoTexto = document.createElement("input");
  campoTexto.type = "text";
  campoTexto.name = "nomeTecnologia";
  div.append(labelTexto, campoTexto);

  //Adicionar Tempo de Experiencia
  const labelRadio = document.createElement("label");
  labelRadio.innerText = "Tempo de experiência: ";

  nameRadios = "tempoExperiência" + contTecnoligias;

  const label1 = document.createElement("label");
  label1.innerText = "0-2 anos";
  const campoRadio1 = document.createElement("input");
  campoRadio1.type = "radio";
  campoRadio1.value = "0-2 anos";
  campoRadio1.name = nameRadios;

  const label2 = document.createElement("label");
  label2.innerText = " 3-4 anos";
  const campoRadio2 = document.createElement("input");
  campoRadio2.type = "radio";
  campoRadio2.value = "3-4 anos";
  campoRadio2.name = nameRadios;

  const label3 = document.createElement("label");
  label3.innerText = " 5+ anos";
  const campoRadio3 = document.createElement("input");
  campoRadio3.type = "radio";
  campoRadio3.value = "5+ anos";
  campoRadio3.name = nameRadios;

  contTecnoligias++;

  //Botão de Remover
  const buttonRemover = document.createElement("input");
  buttonRemover.type = "button";
  buttonRemover.value = "Remover";
  buttonRemover.addEventListener("click", function (ev) {
    const element = ev.currentTarget.parentNode;
    form.removeChild(element);
  });

  div.append(
    labelRadio,
    campoRadio1,
    label1,
    campoRadio2,
    label2,
    campoRadio3,
    label3,
    buttonRemover
  );
  form.appendChild(div);
}

function cadastrar() {
  let dev = "";

  form.querySelectorAll("input[name='nameDev']").forEach((element) => {
    dev += "Dev: " + element.value + "\n";
  });

  let tecnologias = form.querySelectorAll("div");
  tecnologias.forEach((element) => {
    element
      .querySelectorAll("input[name='nomeTecnologia']")
      .forEach((element) => {
        let parent = element.parentNode;
        let tempoExperiencia = parent.querySelector(
          "input[type='radio']:checked"
        );

        dev +=
          "Nome da Tecnologia: " +
          element.value +
          "\n" +
          "Tempo de Exp: " +
          tempoExperiencia.value +
          "\n";
      });
  });

  nomeDevInput.value = "";
  form.querySelectorAll("div").forEach((element) => form.removeChild(element));

  devs.push(dev);
  console.log(devs);
}

buttonAdiconarTec.addEventListener("click", adicionarTec);
buttonCadastrar.addEventListener("click", cadastrar);
