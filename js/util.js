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
    message = new SpeechSynthesisUtterance(mensaje)
    window.speechSynthesis.speak(message)
}

/**
 * Esta función detiene el sintetizador de voz
 */
function callar(){
    window.speechSynthesis.cancel()
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function write(mensaje){
    document.writeln(mensaje)
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function writeln(mensaje){
    document.writeln(mensaje+"<br>")
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de python
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function print(mensaje){
    document.writeln(mensaje+"<br>")
}

/**
 * función usada para imprimir sin salto de linea en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de python
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function printx(mensaje){
    document.writeln(mensaje)
}

/**
 * función usada para imprimir en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de PSeint
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function imprimir(mensaje){
    document.writeln(mensaje+"<br>")
}

/**
 * función usada para imprimir sin salto de linea en el DOM, y facilitar el
 * trabajo educativo a nicel inicial.
 * El nombre es para emular el print de PSeint
 * No recomendado para usar en productos destinados a ambientes de producción
 * @param {mensaje a escribir en el DOM} mensaje 
 */
function imprimirx(mensaje){
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
function input(mensaje){
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
function entrada(mensaje){
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
        .replace("_", " ");
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
        if(navigator.geolocation){
            var success = function(position){
            var latitud = position.coords.latitude,
                longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function(msg){
                console.error( msg );
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
        if(navigator.geolocation){
            var success = function(position){
            var latitud = position.coords.latitude,
                longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function(msg){
                console.error( msg );
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
            timestamp=json.sys.sunset
            fecha = new Date(timestamp*1000)
            anio = fecha.getFullYear()
            hora = fecha.getHours()
            minuto = fecha.getMinutes()
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
            timestamp=json.sys.sunrise
            fecha = new Date(timestamp*1000)
            anio = fecha.getFullYear()
            hora = fecha.getHours()
            minuto = fecha.getMinutes()
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
        if(navigator.geolocation){
            var success = function(position){
            var latitud = position.coords.latitude,
                longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function(msg){
                console.error( msg );
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
        if(navigator.geolocation){
            var success = function(position){
            var latitud = position.coords.latitude,
                longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function(msg){
                console.error( msg );
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
        if(navigator.geolocation){
            var success = function(position){
            var latitud = position.coords.latitude,
                longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function(msg){
                console.error( msg );
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
        if(navigator.geolocation){
            var success = function(position){
            var latitud = position.coords.latitude,
                longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function(msg){
                console.error( msg );
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
        if(navigator.geolocation){
            var success = function(position){
            var latitud = position.coords.latitude,
                longitud = position.coords.longitude;
            }
            navigator.geolocation.getCurrentPosition(success, function(msg){
                console.error( msg );
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
function getLlueve(){
    if(getClima().includes("lluv") || getClima().includes("llov"))      return true
    else                                                                return false
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
