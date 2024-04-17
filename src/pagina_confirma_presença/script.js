const scrip_do_google = 'https://script.google.com/macros/s/AKfycbxJTE7mCPXFJ7bUeZVRHv09rRmHqxdaRRQvRDIPt0EfwN953m-GZnes3p-FRPeTaq0/exec';
const dados_do_formulario = document.forms['confirmarPresencaForm'];

dados_do_formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  fetch(scrip_do_google, {method: 'POST', body: new FormData(dados_do_formulario)}).then(response => {
    alert('Dados enviado com sucesso!', response);
    dados_do_formulario.reset();
  })
  .catch(error => console.log('Erro enviar dos dados.'))
});