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
    const display = document.getElementById('display');
    display.value = eval(display.value);
  } catch (error) {
    alert("ERRORE!");
  }
}
