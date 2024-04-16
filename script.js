// Lista de convidados
var listaDeConvidados = [
  "Ezequias", "Jacilene", "Jullya", "Vó Cristina", "Tio Dica", "Talita", "Tio Nael", "Tia Kamyla", "Isadora", "Isabela",
  "Tia Jane", "Silvanir", "Geovana", "Fernanda", "Gustavo", "Tio Siel", "Lucelia", "Tio Nia", "Mariana", "Heitor",
  "Kauan", "Tio Van", "Aline", "Gabriele", "Marina", "Claudinei", "Katia", "Maria", "Douglas (marido da Katia)",
  "Alessandra", "Laércio", "Beatriz Souza", "Isabela Souza", "Elisangêla", "Maysa", "Sérgio", "Tia Nalvinha",
  "Namorado Da Daiane", "Daiane Franca", "Alisson", "Karol", "Tia Dalva", "Taciane", "Joyce", "Alex da Joyce",
  "Kaio", "Ana", "Bruna", "Rafael", "Mariana", "Milena", "Irmã Mara", "Pastor Elias", "Amanda", "Anthony",
  "Valter", "Thais", "Jonas", "Felicia", "Magela", "Ozias", "Fernanda", "Thaylane", "Gabriel", "Cilene", "Eloa",
  "Jonathan", "Eden", "Stephany", "Daniel", "Aelson", "Alaide"
];

// Função para verificar a presença e redirecionar para a segunda tela
function verificarPresenca(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  // Obtém o valor do campo de entrada
  var nome = document.getElementById('nome').value;
  
  // Verifica se o nome está na lista de convidados
  if (listaDeConvidados.includes(nome)) {
    window.location.href = "src/pagina_confirma_presença/confirmar_presenca.html";
  } else {
    alert('Desculpe, seu nome não consta na lista de convidados.');
  }
}
