let display = document.getElementById('display')

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value
    } else {
        display.innerText += value
    }
}

function clearDisplay() {
    display.innerText = '0'
}

function calculate() {
    try {
        resultado = eval(display.innerText)
        display.innerText = resultado
        hablar(resultado)
    } catch (error) {
        display.innerText = 'Error'
        hablar('Error')
        setTimeout(clearDisplay, 1000)
    }
}