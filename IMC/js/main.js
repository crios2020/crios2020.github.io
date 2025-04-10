function calcularIMC(peso, altura){
    //parámetros de entrada peso(kgs) y altura(cms)
    //imc = peso / Math.pow(altura/100, 2)
    //imc = imc.toFixed(1)
    //return imc
    return (peso / Math.pow(altura/100, 2)).toFixed(1)
}

function calcularEstado(imc){
    estado=""
    if(imc<=15)                         estado="delgadez muy severa"
    if(imc>15       && imc<=15.9)       estado="delgadez severa"
    if(imc>=16      && imc<=18.4)       estado="delgadez"
    if(imc>=18.5    && imc<=24.9)       estado="peso correcto"
    if(imc>=25      && imc<=29.9)       estado="sobrepeso"
    if(imc>=30      && imc<=34.9)       estado="obesidad moderada"
    if(imc>=35      && imc<=39.9)       estado="obesidad severa"
    if(imc>=40)                         estado="obesidad morbida"
    return estado
}

function calcularColor(imc){
    if(imc<=15.9 || imc>=30)    return "color: white; background-color: red;"
    if(imc<=18.4 || imc>=24.9)  return "color: red; background-color: yellow;"
    return "color: white; background-color: green;"
}

//peso=83
//altura=180
//console.log(calcularIMC(peso, altura))
//console.log(calcularEstado(calcularIMC(peso, altura)))
//console.log(calcularColor(calcularIMC(peso, altura)))

function calcular(){
    peso=parseInt(document.getElementById("peso").value)
    altura=parseInt(document.getElementById("altura").value)
    imc=calcularIMC(peso, altura)
    estado=calcularEstado(imc)
    color=calcularColor(imc)
    console.log(color)
    document.getElementById("imc").value=imc
    document.getElementById("estado").value=estado
    document.getElementById("imc").style=color
    document.getElementById("estado").style=color
}
