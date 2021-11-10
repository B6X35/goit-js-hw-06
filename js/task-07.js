const controlInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


controlInput.addEventListener("input", event => {
    console.log(event.currentTarget.value);
    return text.style.fontSize = event.currentTarget.value + 'px'
})