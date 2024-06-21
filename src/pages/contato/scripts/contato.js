// import token from '../../../config'

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`)
  }
  let objForm = Object.fromEntries(formData.entries())
  console.log(objForm)
  let mensagem = `Olá, gostaria de saber mais sobre ${objForm.interesse}.\n
${objForm.mensagem}\n
  \n
Atenciosamente,\n
${objForm.nome} ${objForm.sobrenome}\n
${objForm.email} - ${objForm.telefone}\n
  `
  console.log(mensagem)
  window.open(`mailto:vivabyte.ti@gmail.com?subject=${objForm.interesse}&body=${mensagem}`);
})