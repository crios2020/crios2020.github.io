function sumar(){
    nro1=parseFloat(document.getElementById("numero1").value)
    nro2=parseFloat(document.getElementById("numero2").value)
    resultado=nro1+nro2
    document.getElementById("resultado").value=resultado
}

function restar(){
    nro1=parseFloat(document.getElementById("numero1").value)
    nro2=parseFloat(document.getElementById("numero2").value)
    resultado=nro1-nro2
    document.getElementById("resultado").value=resultado
}

function multiplicar(){
    nro1=parseFloat(document.getElementById("numero1").value)
    nro2=parseFloat(document.getElementById("numero2").value)
    resultado=nro1*nro2
    document.getElementById("resultado").value=resultado
}

function dividir(){
    nro1=parseFloat(document.getElementById("numero1").value)
    nro2=parseFloat(document.getElementById("numero2").value)
    if(nro2!=0){
        resultado=nro1/nro2
        document.getElementById("resultado").value=resultado
    }else{
        document.getElementById("resultado").value="Error / 0 !"
    }
}