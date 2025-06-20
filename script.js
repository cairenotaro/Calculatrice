function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
    function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;

    display.classList.add('flash');
    setTimeout(() => display.classList.remove('flash'), 200);
}


function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        alert("ERRORE!");
    }
}
