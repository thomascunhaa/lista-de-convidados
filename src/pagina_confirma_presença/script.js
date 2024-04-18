const scrip_do_google = 'https://script.google.com/macros/s/AKfycbxJTE7mCPXFJ7bUeZVRHv09rRmHqxdaRRQvRDIPt0EfwN953m-GZnes3p-FRPeTaq0/exec';
const dados_do_formulario = document.forms['confirmarPresencaForm'];

dados_do_formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  mostrarLoading(); // Mostrar o loading antes de enviar os dados

  fetch(scrip_do_google, {method: 'POST', mode: 'no-cors', body: new FormData(dados_do_formulario)})
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

function enviarFormulario() {
  // Oculta o botão e mostra a mensagem de "Enviando..."
  document.getElementById('enviar').style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  // Simula um envio (você pode adicionar a lógica de envio aqui)
  setTimeout(function() {
    // Após um tempo de simulação, mostra a mensagem de "Enviado!"
    document.getElementById('loading').style.display = 'none';
    document.getElementById('enviado').style.display = 'block';
  }, 2000); // Simula um envio de 2 segundos (você pode ajustar conforme necessário)
}
