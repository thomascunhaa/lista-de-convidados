// Função para lidar com a submissão do formulário de confirmação no casamento religioso
function verificarPresenca(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Aqui você pode adicionar código para processar a confirmação de presença no casamento religioso
  var nome = document.getElementById("nome").value;
  var confirmacao = document.getElementById("confirmacao").value;  
  alert("Obrigado, " + nome + ", pela confirmação de presença no casamento religioso!");

}

// Função para lidar com a submissão do formulário de confirmação na festa de casamento
function verificarPresencaFesta(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Aqui você pode adicionar código para processar a confirmação de presença na festa de casamento
  var nomeFesta = document.getElementById("nome").value; // Corrigido para "nome"
  alert("Obrigado, " + nomeFesta + ", pela confirmação de presença na festa de casamento!");
}
