const inputTarget = document.querySelector("#validation-input");

inputTarget.addEventListener('blur', onBlurInput);
function onBlurInput(event) {
    if (Number(inputTarget.dataset.length) === event.target.value.length) {
        inputTarget.classList.remove('invalid');
        inputTarget.classList.add('valid');
        console.log('+');
    } else {
        inputTarget.classList.remove('valid');
        inputTarget.classList.add('invalid');
        console.log('-');
    }
}
