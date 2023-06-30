const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }
  
})
 