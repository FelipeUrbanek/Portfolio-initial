$('#btn-base').click(function () {
  scrollTo(0, 0)
})

$('#btn-email').click(function () {
  var templateParams = {
    name: document.getElementById('input-text').value,
    email: document.getElementById('input-email').value,
    mensagem: document.getElementById('input-mensagem-footer').value
  }

  if (
    templateParams.name === '' ||
    templateParams.email === '' ||
    templateParams.mensagem === ''
  ) {
    alert('Preencha todos os campos')
  } else {
    emailjs.send('gmail-message', 'template_gydeqlc', templateParams).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
    $('#btn-email').css('background', '#2BFC55')
    $('#btn-email').text('Enviado!')

    document.getElementById('input-text').value = ''
    document.getElementById('input-email').value = ''
    document.getElementById('input-mensagem-footer').value = ''
  }
})
