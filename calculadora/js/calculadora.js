//print("Hola mundo")
//resultado=document.getElementById("resultado")
//resultado.value="hola mundo!"
//numero1=parseFloat(document.getElementById("numero1").value)
//numero2=parseFloat(document.getElementById("numero2").value)
//resultado.value=numero1+numero2

function sumar(){
    resultado=document.getElementById("resultado")
    if( parseFloat(document.getElementById("numero1").value)==document.getElementById("numero1").value && 
        parseFloat(document.getElementById("numero2").value)==document.getElementById("numero2").value
      ){
        numero1=parseFloat(document.getElementById("numero1").value)
        numero2=parseFloat(document.getElementById("numero2").value)
        resultado.value=numero1+numero2
    }else{
        resultado.value="Error de ingreso de datos"
    }
    hablar(resultado.value)
}

function restar(){
    resultado=document.getElementById("resultado")
    if( parseFloat(document.getElementById("numero1").value)==document.getElementById("numero1").value && 
        parseFloat(document.getElementById("numero2").value)==document.getElementById("numero2").value
      ){
        numero1=parseFloat(document.getElementById("numero1").value)
        numero2=parseFloat(document.getElementById("numero2").value)
        resultado.value=numero1-numero2
    }else{
        resultado.value="Error de ingreso de datos"
    }
    hablar(resultado.value)
}

function multi(){
    resultado=document.getElementById("resultado")
    if( parseFloat(document.getElementById("numero1").value)==document.getElementById("numero1").value && 
        parseFloat(document.getElementById("numero2").value)==document.getElementById("numero2").value
      ){
        numero1=parseFloat(document.getElementById("numero1").value)
        numero2=parseFloat(document.getElementById("numero2").value)
        resultado.value=numero1*numero2
    }else{
        resultado.value="Error de ingreso de datos"
    }
    hablar(resultado.value)
}

function divi(){
    resultado=document.getElementById("resultado")
    if( parseFloat(document.getElementById("numero1").value)==document.getElementById("numero1").value && 
        parseFloat(document.getElementById("numero2").value)==document.getElementById("numero2").value
      ){
        numero1=parseFloat(document.getElementById("numero1").value)
        numero2=parseFloat(document.getElementById("numero2").value)
        if(numero2!=0)  resultado.value=numero1/numero2
        else            resultado.value="Error / 0 !"
    }else{
        resultado.value="Error de ingreso de datos"
    }
    hablar(resultado.value)
}
