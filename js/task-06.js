const textInput = document.querySelector('#validation-input');
// const validLength = document.querySelector('[data-length="6"]');

textInput.addEventListener("blur", event => {
    if(textInput.value.length > textInput.dataset.length) {
        event.currentTarget.classList.add("valid")
    } else {
        event.currentTarget.classList.add("invalid")
    }
    console.log(event.currentTarget.value.length)
    console.log(textInput.dataset.length)
})