const scrip_do_google = 'https://script.google.com/macros/s/AKfycbxJTE7mCPXFJ7bUeZVRHv09rRmHqxdaRRQvRDIPt0EfwN953m-GZnes3p-FRPeTaq0/exec';
const dados_do_formulario = document.forms['confirmarPresencaForm'];

dados_do_formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Criar um novo FormData para armazenar todos os campos do formulário
  var formData = new FormData();

  // Adicionar os campos do formulário original
  var camposFormulario = new FormData(dados_do_formulario);
  camposFormulario.forEach(function(value, key) {
    formData.append(key, value);
  });

  // Adicionar os campos dos novos elementos dinâmicos
  var novosCampos = document.querySelectorAll('.pessoa input[type="text"], .pessoa select');
  novosCampos.forEach(function(campo) {
    formData.append(campo.name, campo.value);
  });

  mostrarLoading(); // Mostrar o loading antes de enviar os dados

  fetch(scrip_do_google, {method: 'POST', mode: 'no-cors', body: formData})
    .then(response => {
      if (!response.ok) {
        window.location.href = 'confirmacao.html';  
        throw new Error('Erro ao enviar os dados.');
      }
      alert('Dados enviados com sucesso!');
      dados_do_formulario.reset();
      // Redireciona para outra página HTML
    })
    .catch(error => console.error(error))
    .finally(() => {
      esconderLoading(); // Esconder o loading após o envio dos dados
    });
});

function mostrarLoading() {
  document.getElementById('loading').style.display = 'block';
}

function esconderLoading() {
  document.getElementById('loading').style.display = 'none';
}

function adicionarPessoa() {
  // Encontrar o contêiner de pessoas
  var pessoasContainer = document.getElementById("pessoas-container");

  // Criar uma nova div para a próxima pessoa
  var novaPessoaDiv = document.createElement("div");
  novaPessoaDiv.className = "pessoa";

  // Criar os campos para a próxima pessoa
  var numeroPessoas = document.querySelectorAll(".pessoa").length + 1;
  var nomeInput = document.createElement("input");
  nomeInput.type = "text";
  nomeInput.name = "nome" + numeroPessoas;
  nomeInput.required = true;

  var confirmacaoSelect = document.createElement("select");
  confirmacaoSelect.name = "confirmacao" + numeroPessoas;
  var simOption = document.createElement("option");
  simOption.value = "Sim";
  simOption.textContent = "Sim";
  var naoOption = document.createElement("option");
  naoOption.value = "Não";
  naoOption.textContent = "Não";
  confirmacaoSelect.appendChild(simOption);
  confirmacaoSelect.appendChild(naoOption);

  // Criar rótulos para os campos
  var nomeLabel = document.createElement("label");
  nomeLabel.textContent = "Nome:";

  var confirmacaoLabel = document.createElement("label");
  confirmacaoLabel.textContent = "Confirmação de Presença:";

  // Adicionar os campos e rótulos à nova div da pessoa
  novaPessoaDiv.appendChild(nomeLabel);
  novaPessoaDiv.appendChild(nomeInput);
  novaPessoaDiv.appendChild(confirmacaoLabel);
  novaPessoaDiv.appendChild(confirmacaoSelect);

  // Adicionar a nova div da pessoa ao contêiner de pessoas
  pessoasContainer.appendChild(novaPessoaDiv);
}
