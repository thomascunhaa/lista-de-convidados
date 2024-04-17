const scrip_do_google = 'https://script.google.com/macros/s/AKfycbxJTE7mCPXFJ7bUeZVRHv09rRmHqxdaRRQvRDIPt0EfwN953m-GZnes3p-FRPeTaq0/exec';
const dados_do_formulario = document.forms['confirmarPresencaForm'];

dados_do_formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

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
.catch(error => console.error(error));
});
