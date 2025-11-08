function cambiarDolaresAPesos(cantidadDeDolares, cotizacion){
    return cantidadDeDolares*cotizacion;
}

function cambiarPesosADolares(cantidadDePesos, cotizacion){
    return cantidadDePesos/cotizacion;
}

function calcular(){
    cargar()
    let monto = parseFloat(document.getElementById("monto").value)
    let operacion = document.getElementById("operacion").value
    let dolarCompra=parseFloat(getDolarBlueCompra())
    let dolarVenta=parseFloat(getDolarBlueVenta())

    //console.log(monto)
    //console.log(operacion)

    if(operacion=="pesos"){
        document
                .getElementById("resultado")
                .value=cambiarPesosADolares(monto,dolarVenta)
    }
    if(operacion=="dolar"){
        document
                .getElementById("resultado")
                .value=cambiarDolaresAPesos(monto,dolarCompra)
    }
}

function getDolarBlueCompra(){
    try {
        const request = new XMLHttpRequest();
        request.open("GET", "https://dolarapi.com/v1/dolares/blue", false); 
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.compra
        }
    } catch (error) {
        return "error"
    }
}

function getDolarBlueVenta(){
    try {
        const request = new XMLHttpRequest();
        request.open("GET", "https://dolarapi.com/v1/dolares/blue", false); 
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.venta
        }
    } catch (error) {
        return "error"
    }
}

function cargar(){
    //console.log(getDolarBlueCompra())
    //console.log(getDolarBlueVenta())
    document.getElementById("compra").value=getDolarBlueCompra()
    document.getElementById("venta").value=getDolarBlueVenta()
}
