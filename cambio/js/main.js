function cambiarDolaresAPesos(cantidadDeDolares, cotizacion) {
    return cantidadDeDolares * cotizacion;
}

function cambiarPesosADolares(cantidadDePesos, cotizacion) {
    return cantidadDePesos / cotizacion;
}

function calcular() {
    cargar()
    let monto = parseFloat(document
        .getElementById("monto")
        .value
        .replaceAll('.', '')
        .replaceAll(',', '.'))
    let operacion = document.getElementById("operacion").value
    let dolarCompra = parseFloat(getDolarBlueCompra())
    let dolarVenta = parseFloat(getDolarBlueVenta())

    if (operacion == "pesos") {
        document
            .getElementById("resultado")
            .value = cambiarPesosADolares(monto, dolarVenta)
    }
    if (operacion == "dolar") {
        document
            .getElementById("resultado")
            .value = cambiarDolaresAPesos(monto, dolarCompra)
    }
    document
        .getElementById("resultado")
        .value = (document.getElementById("resultado").value).toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    formatear()

}

function getDolarBlueCompra() {
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

function getDolarBlueVenta() {
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

function cargar() {
    //console.log(getDolarBlueCompra())
    //console.log(getDolarBlueVenta())
    document.getElementById("compra").value = getDolarBlueCompra()
    document.getElementById("venta").value = getDolarBlueVenta()
}

function formatear() {
    let monto = parseFloat(document.getElementById("monto")
        .value
        .replaceAll('.', '')
        .replaceAll(',', '.'))
    let dolarCompra = parseFloat(getDolarBlueCompra())
    let dolarVenta = parseFloat(getDolarBlueVenta())

    document
        .getElementById("monto")
        .value = (monto).toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    document
        .getElementById("compra")
        .value = dolarCompra.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    document
        .getElementById("venta")
        .value = dolarVenta.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    document
        .getElementById("resultado")
        .value = (parseFloat(
            document
                .getElementById("resultado").value))
            .toLocaleString('es-AR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })

}
