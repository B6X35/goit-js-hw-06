const textInput = document.querySelector('#validation-input');
// const validLength = document.querySelector('[data-length="6"]');

textInput.addEventListener("blur", event => {
if(event.value.length >= event.dataset.length) {
    event.currentTarget.classList.add("valid")
} else {
    event.currentTarget.classList.add("invalid")
}
})