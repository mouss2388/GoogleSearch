const input = document.querySelector('input');
const btnClear = document.getElementsByClassName('clear');

input.oninput = handleInput;


function handleInput(event) {

    event.preventDefault();
    if (input.value === "") {
        btnClear[0].classList.add('hidden');
    } else {
        btnClear[0].classList.remove('hidden');
        btnClear.item(0).addEventListener('click', () => {
            input.value = "";
            input.focus();
        })
    }
    
}


