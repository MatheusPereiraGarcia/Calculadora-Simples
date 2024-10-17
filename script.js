function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
}

function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Remove o último caractere
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}
