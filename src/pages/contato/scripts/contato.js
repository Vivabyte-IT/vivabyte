const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  for (const pair of formData.entries()) {
    console.log(pair)
  }
  alert(JSON.stringify(Object.fromEntries(formData)))
})