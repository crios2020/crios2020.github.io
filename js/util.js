/**
    Libreria pensada como decorado para curso de programación Inicial
*/
const apiWheather = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    city: 'Buenos Aires',       //FIXME deberia detectar la ciudad
    internet: false
}

const apiGeo = {
    url: 'https://ipwhois.app/json/'
}

/**
 * Función para generar voz
 * La voz es generada por el browser, se recomienda usar Edge de Microsoft
 * Ej: hablar("Hola Mundo!!")
 * @param {*} mensaje Mensaje a generar
 */
function hablar(mensaje) {
    const message = new SpeechSynthesisUtterance(mensaje)
    window.speechSynthesis.speak(message)
}

/**
 * Función para generar voz
 * La voz es generada por el browser, se recomienda usar Edge de Microsoft
 * Ej: speak("Hola Mundo!!")
 * @param {*} mensaje Mensaje a generar
 */
function speak(mensaje) {
    const message = new SpeechSynthesisUtterance(mensaje)
    window.speechSynthesis.speak(message)
}

/**
 * Esta función detiene el sintetizador de voz
 */
function callar() {
    window.speechSynthesis.cancel()
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function write(mensaje) {
    document.writeln(mensaje)
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function writeln(mensaje) {
    document.writeln(mensaje + "<br>")
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de python
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function print(mensaje) {
    document.writeln(mensaje + "<br>")
}

/**
 * función usada para imprimir sin salto de linea en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de python
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function printx(mensaje) {
    document.writeln(mensaje)
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de PSeint
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function imprimir(mensaje) {
    document.writeln(mensaje + "<br>")
}

/**
 * función usada para imprimir sin salto de linea en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de PSeint
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function imprimirx(mensaje) {
    document.writeln(mensaje)
}

/**
 * función usada para entrada de datos, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular un input básico
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a mostrar} mensaje 
 * @returns valor ingresado
 */
function input(mensaje) {
    return prompt(mensaje)
}

/**
 * función usada para entrada de datos, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular un input de PSeint
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a mostrar} mensaje 
 * @returns valor ingresado
 */
function entrada(mensaje) {
    return prompt(mensaje)
}

/**
 * Función que devuelve la zona horaria
 * @returns Zona Horaria
*/
function getZonaHoraria() {
    //El formato de zona horaria lo da el navegador de internet
    return Intl
        .DateTimeFormat()
        .resolvedOptions()
        .timeZone
        .replace("/", " ")
        .replace("/", " ")
        .replace("_", " ")
        .replace("America","América")
}


/**
 * Función que convierte grados kelvin a celcius
 * @param {*} kelvin 
 * @returns 
 */
function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15)
}

/**
 * Devuelve la temperatura ambiente consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getTemperatura() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return toCelsius(json.main.temp)
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la sensación térmica ambiente consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getSensacionTermica() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return toCelsius(json.main.feels_like)
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la temperatura mínima consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getTemperaturaMin() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return toCelsius(json.main.temp_min)
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la temperatura máxima consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getTemperaturaMax() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return toCelsius(json.main.temp_max)
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string con el clima consultada en un API meteorológico
 * por el momento no se conoce el listado de enums posibles
 * @returns string clima
 */
function getClima() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.weather[0].description
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string el nombre de la zona, consultada en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * Se espera solucionar bug detectado en algunas configuraciones usando el API de JS
 * @returns string zona
 */
function getZona() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.timezone.replace("/", " ").replace("/", " ").replace("_", " ")
        }
    } catch (error) {
        return "error"
    }
}

/**
 * @deprecated este método esta deprecado por que la API devuelve una región no un continente
 * Devuelve un string el nombre del continente, consultado en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * @returns string continente
 */
function getContinente() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.continent
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la hora en que anochece consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getAnochece() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            var timestamp = json.sys.sunset
            var fecha = new Date(timestamp * 1000)
            var anio = fecha.getFullYear()
            var hora = fecha.getHours()
            var minuto = fecha.getMinutes()
            return hora + " horas y " + minuto + " minutos"
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la hora en que anochece consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getAmanece() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${apiWheather.url}?q=${apiWheather.city}&appid=${apiWheather.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            const timestamp = json.sys.sunrise
            const fecha = new Date(timestamp * 1000)
            const anio = fecha.getFullYear()
            const hora = fecha.getHours()
            const minuto = fecha.getMinutes()
            return hora + " horas y " + minuto + " minutos"
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string el nombre de la región, consultado en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * @returns string región
 */
function getRegion() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.continent
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string el nombre del país consultada en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * @returns string pais
 */
function getPais() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.country
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string el nombre de la provincia consultada en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * basado en la dirección del ISP
 * @returns string provincia
 */
function getProvincia() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.region
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve un string el nombre de la ciudad consultada en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * basado en la dirección del ISP
 * @returns string ciudad
 */
function getCiudad() {
    //FIXME es imprecisa la ciudad
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.city
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve devuelve el valor del dolar consultada en un API,
 * https://ipwhois.app/json/ solo se dispones de 10mil request por mes en modo free
 * basado en la dirección del ISP
 * @returns string ciudad
 */
function getValorDolar() {
    try {
        if (navigator.geolocation) {
            var success = function (position) {
                var latitud = position.coords.latitude,
                    longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function (msg) {
                console.error(msg);
            });
        }
        const request = new XMLHttpRequest();
        request.open("GET", `${apiGeo.url}`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.currency_rates
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Esta función devuelve un booleano true para llueve en este momento
 * y false para no llueve. esta función consulta el clima actual.
 * Esta función esta pensada para ser usada en el ambito educativo en 
 * enseñanza de estructuras condicionales.
 */
function getLlueve() {
    if (getClima().includes("lluv") || getClima().includes("llov")) return true
    else return false
}

/**
 * Devuelve un número aleatorio entre 1 y max
 * @param {*} max número máximo, debe ser positivo
 * @returns 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


/**
 * Función que devuelve la hora en un string
 * @returns Hora
 */
function getHora() {
    const fecha = new Date()
    const hora = fecha.getHours()
    const minuto = fecha.getMinutes()
    return hora + " horas y " + minuto + " minutos"
}

/**
 * Función el momento del día
 * @returns Momento
 */
function getMomento() {
    const fecha = new Date()
    const hora = fecha.getHours()
    var momento = ""
    if (hora >= 0 && hora < 4) momento = "trasnoche"
    if (hora >= 4 && hora < 6) momento = "madrugada"
    if (hora >= 6 && hora < 8) momento = "amanecer"
    if (hora >= 8 && hora < 11) momento = "mañana"
    if (hora >= 11 && hora < 14) momento = "mediodía"
    if (hora >= 14 && hora < 18) momento = "tarde"
    if (hora >= 18 && hora < 20) momento = "anochecer"
    if (hora >= 20 && hora < 24) momento = "noche"
    return momento
}

/**
 * Función la acción del momento del día
 * @returns Momento
 */
function getMomentoAccion() {
    const fecha = new Date()
    const hora = fecha.getHours()
    var momento = ""
    if (hora >= 0 && hora < 6) momento = "dormir"
    if (hora >= 6 && hora < 8) momento = "despertar"
    if (hora >= 8 && hora < 11) momento = "desayunar"
    if (hora >= 11 && hora < 14) momento = "morfar"
    if (hora >= 14 && hora < 16) momento = "dormir siesta"
    if (hora >= 16 && hora < 18) momento = "merendar"
    if (hora >= 18 && hora < 20) momento = "ver series"
    if (hora >= 20 && hora < 22) momento = "cenar"
    if (hora >= 22 && hora < 24) momento = "dormir"
    return momento
}

/**
 * Función que devuelve la fecha actual en un string
 * @returns Fecha
 */
function getFecha() {
    const fecha = new Date()
    const diaMes = fecha.getDate()
    const diaSem = fecha.getDay()
    const nroMes = fecha.getMonth()
    const anio = fecha.getFullYear()

    var nombreDia = ''
    if (diaSem == 0) nombreDia = 'domingo'
    if (diaSem == 1) nombreDia = 'lunes'
    if (diaSem == 2) nombreDia = 'martes'
    if (diaSem == 3) nombreDia = 'miércoles'
    if (diaSem == 4) nombreDia = 'jueves'
    if (diaSem == 5) nombreDia = 'viernes'
    if (diaSem == 6) nombreDia = 'sábado'

    var nombreMes = ''
    if (nroMes == 0) nombreMes = 'enero'
    if (nroMes == 1) nombreMes = 'febrero'
    if (nroMes == 2) nombreMes = 'marzo'
    if (nroMes == 3) nombreMes = 'abril'
    if (nroMes == 4) nombreMes = 'mayo'
    if (nroMes == 5) nombreMes = 'junio'
    if (nroMes == 6) nombreMes = 'julio'
    if (nroMes == 7) nombreMes = 'agosto'
    if (nroMes == 8) nombreMes = 'septiembre'
    if (nroMes == 9) nombreMes = 'octubre'
    if (nroMes == 10) nombreMes = 'noviembre'
    if (nroMes == 11) nombreMes = 'diciembre'

    return nombreDia + ", " + diaMes + " de " + nombreMes + " del año " + anio
}

/**
 * Función hoyEs devuelve una esfemérides del día
 * @returns esfemérides
 */
function hoyEs() {
    const fecha = new Date()
    const diaSem = fecha.getDay()
    var hoy = ""
    if (diaSem == 1) hoy = "Odio los lunes, por que hay que ir a trabajar!"
    if (diaSem == 2) hoy = "es Martes hay que ir a trabajar!"
    if (diaSem == 3) hoy = "es Miércoles hay que ir a trabajar!"
    if (diaSem == 4) hoy = "es Jueves hay que ir a trabajar!"
    if (diaSem == 5) hoy = "es viernes y tu cuerpo lo sabe!"
    if (diaSem == 6) hoy = "Es fin de semana, a descansar!"
    if (diaSem == 0) hoy = "Es fin de semana, a descansar!"
    return hoy
}

/**
 * Función que devuelve la estación
 * @returns esfemérides
 */
function getEstacion() {
    var estacion = ""
    const fecha = new Date()
    const diaMes = fecha.getDate()
    const diaSem = fecha.getDay()
    const nroMes = fecha.getMonth()
    switch (nroMes) {
        case 0: case 1: estacion = "verano"
            break;
        case 3: case 4: estacion = "otoño"
            break;
        case 6: case 7: estacion = "invierno"
            break;
        case 9: case 10: estacion = "primavera"
            break;
        case 2: estacion = (diaMes < 21) ? "verano" : "otoño"
            break
        case 5: estacion = (diaMes < 21) ? "otoño" : "invierno"
            break
        case 8: estacion = (diaMes < 21) ? "invierno" : "primavera"
            break
        case 11: estacion = (diaMes < 21) ? "primavera" : "verano"
            break
    }
    return estacion
}

/**
 * Función para pausar el hilo de ejecución
 * @param {*} tiempo 
 * @returns 
 */
function pausar(tiempo) {
    return new Promise(resolve => {
        setTimeout(resolve, tiempo)
    })
}

function getEfemerides(){
    var fecha=new Date()
    var diaMes=fecha.getDate()
    var mes=fecha.getMonth()
    var efemerides=""


    //inicio de mes
    if(diaMes==1)                               efemerides+="Un nuevo mes inicia!!"

    //día de ñoquis
    if(diaMes==29)                              efemerides+="hoy es 29, hoy es día de ñoquis!!"

    //día de la mujer
    if(diaMes==8 && mes==2)                     efemerides+="Hoy es el día de la mujer!!"

    //día del trabajador
    if(diaMes==1 && mes==4)                     efemerides+="Hoy es el día del trabajador!!"    

    //día de la felicidad
    if(diaMes==20 && mes==2)                    efemerides+="Hoy es el día internacional de la felicidad!!"

    //día del programador
    if(diaMes==13 && mes==8)                    efemerides+="Hoy es el día del programador!!"

    //cumpleaños del programador
    if(diaMes==2 && mes==1)                     efemerides+="Hoy es el cumpleaños de mi programador!!"

    //día de la patria
    if(diaMes==25 && mes==4)                    efemerides+="Hoy es el día de la patria en argentina!!"

    //día de la independencia
    if(diaMes==9 && mes==6)                     efemerides+="Hoy es el día de la independencia en argentina !!"

    //día de san martin
    if(diaMes==17 && mes==7)                    efemerides+="Hoy recordamos a nuestro padre de la patria, el general Don Jose de San Martín!!"

    //día de la primavera & estudiante
    if(diaMes==21 && mes==8)                    efemerides+="Hoy es el día del estudiante y del perfumista!!"

    //día de san patricio
    if(diaMes==17 && mes==3)                    efemerides+="Feliz San Patricio, a tomar cerveza!!"

    //día del aprendiz
    if(diaMes==3 && mes==5)                     efemerides+="Feliz día del aprendiz, se viene la noche de los oficios!"

    //día del mecánico 
    if(diaMes==24 && mes==1)                    efemerides+="Feliz día del mecánico!!"

    //día de la secretaria
    if(diaMes==4 && mes==8)                     efemerides+="Feliz día de la secretaria!!"

    //día del ferroviario
    if(diaMes==1 && mes==2)                     efemerides+="Hoy es el día del ferroviario!!"

    //día de la educación técnica
    if(diaMes==15 && mes==10)                   efemerides+="Hoy es el día de la educación técnica!!"

    //día del maestro
    if(diaMes==11 && mes==8)                    efemerides+="Hoy es el día del maestro!!"

    //día de la maestra jardinera
    if(diaMes==28 && mes==4)                    efemerides+="Hoy es el día de la maestra jardinera!!"

    //Navidad
    if(diaMes==24 && mes==11)                   efemerides+="Feliz noche buena!!!"
    if(diaMes==25 && mes==11)                   efemerides+="Feliz navidad!!!"

    //Feliz año nuevo!
    if(diaMes==31 && mes==11)                   efemerides+="Hoy es Fin de Año!!"
    if(diaMes==1 && mes==0)                     efemerides+="Feliz año nuevo!!"

    return efemerides;
}

/**
 * Devuelve la cotización del dolar oficial para la compra
 * @returns cotización en Arg$
 */
function getValorDolarOficialCompra() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", 'https://dolarapi.com/v1/dolares/oficial', false); 
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.compra
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la cotización del dolar oficial para la venta
 * @returns cotización en Arg$
 */
function getValorDolarOficialVenta() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", 'https://dolarapi.com/v1/dolares/oficial', false); 
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.venta
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la cotización del dolar blue para la compra
 * @returns cotización en Arg$
 */
function getValorDolarBlueCompra() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", 'https://dolarapi.com/v1/dolares/blue', false); 
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.compra
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve la cotización del dolar blue para la venta
 * @returns cotización en Arg$
 */
function getValorDolarBlueVenta() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", 'https://dolarapi.com/v1/dolares/blue', false); 
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.venta
        }
    } catch (error) {
        return "error"
    }
}

/**
 * Devuelve el ultimo valor registrado de riesgo país
 * @returns valor de riesgo país
 */
function getValorRiesgoPais() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", 'https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo/', false); 
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.valor
        }
    } catch (error) {
        return "error"
    }
}