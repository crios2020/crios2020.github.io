function sumar(){
    nro1=parseFloat(document.getElementById("numero1").value)
    nro2=parseFloat(document.getElementById("numero2").value)
    resultado=nro1+nro2         //2+2.1=4
    document.getElementById("resultado").value=resultado
    hablar(resultado)
}

function restar(){
    nro1=parseFloat(document.getElementById("numero1").value)
    nro2=parseFloat(document.getElementById("numero2").value)
    resultado=nro1-nro2
    document.getElementById("resultado").value=resultado
    hablar(resultado)
}

function multiplicar(){
    nro1=parseFloat(document.getElementById("numero1").value)
    nro2=parseFloat(document.getElementById("numero2").value)
    resultado=nro1*nro2
    document.getElementById("resultado").value=resultado
    hablar(resultado)
}

function dividir(){
    nro1=parseFloat(document.getElementById("numero1").value)
    nro2=parseFloat(document.getElementById("numero2").value)
    if(nro2!=0){
        resultado=nro1/nro2
        document.getElementById("resultado").value=resultado
        hablar(resultado)
    }else{
        document.getElementById("resultado").value="No se puede dividir por 0";
        hablar("Error, No se puede dividir por 0!")
    }
}

function borrar(){
    document.getElementById("numero1").value=0
    document.getElementById("numero2").value=0
    document.getElementById("resultado").value="Ingrese una nueva operación"
    hablar("Ingrese una nueva operación")
}

function informacion(){
    ubicacion=zonaHoraria()
    temperatura=getTemperatura()
    clima=getClima()
    informacion="en "+ubicacion+", la temperatura es "+temperatura
                +" grados centígrados, el clima es "+clima

    document.getElementById("informacion").value=informacion

}

