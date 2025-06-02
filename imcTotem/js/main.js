
function calcularEstado(imc){
    estado=""
    if(imc<=15)                         estado="delgadez muy severa"                //
    if(imc>15       && imc<=15.9)       estado="delgadez severa"
    if(imc>=16      && imc<=18.4)       estado="delgadez"
    if(imc>=18.5    && imc<=24.9)       estado="peso correcto"
    if(imc>=25      && imc<=29.9)       estado="sobrepeso"
    if(imc>=30      && imc<=34.9)       estado="obesidad moderada"
    if(imc>=35      && imc<=39.9)       estado="obesidad severa"
    if(imc>=40)                         estado="obesidad mórbida"
    return estado
}

function calcularColor(imc){
    if(imc<=15.9 || imc>=30)    return "color: white; background-color: red;"       //
    if(imc<=18.4 || imc>=24.9)  return "color: red; background-color: yellow;"
    return "color: white; background-color: green;"
}

function calcular(){

    // Obtener la cadena de consulta
    const queryString = window.location.search;

    // Crear un objeto URLSearchParams
    const urlParams = new URLSearchParams(queryString);

    //captura los valores de la url y los setea en el form
    if(urlParams.has("peso")) document.getElementById("peso").value=urlParams.get("peso")
    if(urlParams.has("altura")) document.getElementById("altura").value=urlParams.get("altura")
    if(urlParams.has("imc")) document.getElementById("imc").value=urlParams.get("imc")

    peso=parseInt(document.getElementById("peso").value)                            //
    altura=parseInt(document.getElementById("altura").value)
    imc=parseFloat(document.getElementById("imc").value)
    if(!isNaN(peso) && !isNaN(altura) &&
        peso>=10 && peso<=500 &&
        altura>=40 && altura<=300
    ){
        estado=calcularEstado(imc)
        color=calcularColor(imc)
        console.log(color)
        //document.getElementById("imc").value=imc
        document.getElementById("estado").value=estado
        document.getElementById("imc").style=color
        document.getElementById("estado").style=color
        hablar("Su índice de masa corporal es "+imc)
        hablar(", su estado es "+estado)    
    }else{                                                                          //
        document.getElementById("imc").value="Error en el ingreso de datos"
        document.getElementById("estado").value=""
        document.getElementById("imc").style="color: red; background-color: yellow;"
        document.getElementById("estado").style="color: red; background-color: yellow;"
        hablar("Error en el ingreso de datos")
    }

}
