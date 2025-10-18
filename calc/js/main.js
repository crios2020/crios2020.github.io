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
        display.innerText = eval(display.innerText)
    } catch (error) {
        display.innerText = 'Error'
        setTimeout(clearDisplay, 1000)
    }
}