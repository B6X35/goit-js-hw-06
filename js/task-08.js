const form = document.querySelector('.login-form');
const submitBtnEl = document.querySelector('button')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
    
    const em = {
        email: form.email.value,
        password: form.password.value
    }
    if (email.value === '' || password.value === '') {
        alert("все поля должны быть заполнены"); 
    } else {
      console.log(em);
    form.reset();
  }
});
