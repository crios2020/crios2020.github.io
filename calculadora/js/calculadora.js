function sumar() {
    nro1 = parseFloat(document.getElementById("numero1").value)
    nro2 = parseFloat(document.getElementById("numero2").value)
    resultado = ""
    if (!isNaN(nro1) && !isNaN(nro2)) {
        resultado = nro1 + nro2
    } else {
        resultado = "error en el ingreso de datos"
    }
    document.getElementById("resultado").value = resultado
    hablar(resultado)
}

function restar() {
    nro1 = parseFloat(document.getElementById("numero1").value)
    nro2 = parseFloat(document.getElementById("numero2").value)
    if (!isNaN(nro1) && !isNaN(nro2)) {
        resultado = nro1 - nro2
    } else {
        resultado = "error en el ingreso de datos"
    }
    document.getElementById("resultado").value = resultado
    hablar(resultado)
}

function multiplicar() {
    nro1 = parseFloat(document.getElementById("numero1").value)
    nro2 = parseFloat(document.getElementById("numero2").value)
    if (!isNaN(nro1) && !isNaN(nro2)) {
        resultado = nro1 * nro2
    } else {
        resultado = "error en el ingreso de datos"
    }
    document.getElementById("resultado").value = resultado
    hablar(resultado)
}

function dividir() {
    nro1 = parseFloat(document.getElementById("numero1").value)
    nro2 = parseFloat(document.getElementById("numero2").value)
    if (!isNaN(nro1) && !isNaN(nro2)) {
        if (nro2 != 0) {
            resultado = nro1 / nro2
            document.getElementById("resultado").value = resultado
            hablar(resultado)
        } else {
            document.getElementById("resultado").value = "No se puede dividir por 0";
            hablar("Error, No se puede dividir por 0!")
        }
    } else {
        resultado = "error en el ingreso de datos"
        hablar(resultado)
    }
}

function borrar() {
    document.getElementById("numero1").value = 0
    document.getElementById("numero2").value = 0
    document.getElementById("resultado").value = "Ingrese una nueva operación"
    hablar("Ingrese una nueva operación")
}

