//Libreria pensada como decorado para curso de programación Inicial

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
    //FIXME a la fecha 12/04/2025 se encontro una PC cliente que no devuelve la zona horaria en el formato esperado, para Buenos aires retorna +GTM3
    return Intl
        .DateTimeFormat()
        .resolvedOptions()
        .timeZone
        .replace("/", " ")
        .replace("/", " ")
        .replace("_", " ");
}

/**
 * Función que devuelve la hora en un string
 * @returns Hora
 */
function getHora() {
    fecha = new Date()
    anio = fecha.getFullYear()
    hora = fecha.getHours()
    minuto = fecha.getMinutes()
    return hora + " horas y " + minuto + " minutos"
}

/**
 * Función el momento del día
 * @returns Momento
 */
function getMomento() {
    momento = ""
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
    momento = ""
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
    fecha = new Date()
    diaMes = fecha.getDate()
    diaSem = fecha.getDay()
    nroMes = fecha.getMonth()
    anio = fecha.getFullYear()

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
    fecha = new Date()
    diaMes = fecha.getDate()
    diaSem = fecha.getDay()
    nroMes = fecha.getMonth()
    anio = fecha.getFullYear()
    hoy = ""
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
    estacion = ""
    fecha = new Date()
    diaMes = fecha.getDate()
    diaSem = fecha.getDay()
    nroMes = fecha.getMonth()
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

const frases = [
    //"¡Che, boludo! ",
    "¿El chori pan te gusta con chimichurri o criolla? ",
    "¿Que haces máquina turbina? ",
    "¿Las pastaflora te gusta de batata o membrillo? ",
    "¡Queee miseria!! Sabés que tenían para comer? 3 empanadas que sobraron de anoche, queee miseria!! ",
    "¡Qué bolonqui! ",
    "¿hacemos un asado? ",
    "¿Vamos a tomar unos fernet? ",
    "¿El fernet lo hacemos 70 30 o 50 50? ",
    "¡Es una masa! ",
    "¿Vas a poner un peso para la birra? ",
    "¡Estoy al horno! ",
    "¡Ma vale! ¡Es un garrón! ",
    "¡Qué groso, un capo! ",
    "¡No te hagas el sota! ",
    "¿Que pretende usted de mi? ",
    "¡Qué bajón! ",
    "¡No jodas! ",
    "¡No me quemés! ",
    "¡Sos un crack! ",
    "¡La pucha, vale la pena estar vivo!!! ",
    "¡soy más argentino que el dulce de leche! ",
    "¡Al toque perro! ",
    "¡Plata no tenemos, miedo tampoco! ",
    "¡Hasta la vista beibi! ",
    //"¿Tenes vértigo en la cola? ",
    "¿Lo entendiste o te lo explico con dibujito? ",
    "¡No tenes los patitos en fila! ",
    "¡Calentito los panchos! ",
    "¡e amigo! ¿Tené un peso para la birra? ",
    "¡En mi barrio eso es pelea! ",
    "¡A los chori a los chori! ",
    "¡Si ya me conocen! ¿Para que me invitan? ",
    "¡El locro estaba potente! ",
    "¡Soy más duro que patada de allanamiento! ",
    "¡Las empanadas salteñas! ¡traen mucho jugo! ¡cuidado que salpican! ",
    "¡Soy un poco temperamental! ",
    "¡No tengo pruebas, pero tampoco dudas! ",
    "¡Todo lo que digo no esta chequeado! ",
    "¡No me peguen, soy Giordano! ",
    "¿Hacemos un truco? ",
    "¿Pinta un picadito? ",
    "¿Pinta una birra? ",
    "¡Otra más, y no jodemos más! ",
    "¡Si nos organizamos, comemos todos! ",
    "¡Cuidado el perro muerde y es bravo! ",
    "¡Habilitame un faso! ",
    "¡No quiero hinchar las guindas, pero esto huele mal! ",
    "¡ey, primero invitáme un café! ",
    "¡En el oeste esta el agite! ",
    "¡Tenemos un Natalia Natalia! ¿donde está Candela? ¿y la moto? ¿y Candela?",
    "¡No hay nada más rico que el paty de cancha! ",
    "¡Ay Caramba! ",
    "¡Digo muchas boludeces por día! ",
    "¡Estoy re manija! ",
    "¡No te duermas, hay que trabajar! ",
    "¡Como te gusta la joda! ",
    "¡Al que madruga Dios lo ayuda! ",
    "¡Llévame con tu líder! ",
    "¡Cocodrilo que se duerme, es cartera! ",
    "¡Ultima noticia! ",
    "¡Sin mas información! ",
    "¡Chanfle y re contra chanfle! ",
    "¡No contaban con mi astucia! ",
    "¡Sigan me los buenos! ",
    "¡Directo al grano! ",
    "¡Hay que romper el hielo! ",
    "¡No soy una persona toxica! ",
    "¡No veo fallas en la lógica! ",
    "¡Cualquiera puede tener un mal día! ¡Pero tu te abusas! ",
    "¡Me resultas una persona toxica! ",
    "¡No debes comportarte así! ",
    "¡Hija de culebra ratón no puede ser! ",
    "¡Sin miedo al éxito! ",
    "¡No esta muerto quien pelea! ",
    "¡Hay más información para este boletín! ",
    "No me canso de decir que ",
    "No tengo más pretextos pero", 
    "Es Hora de admitir que ",
    "No hay mas manera de decir que ",
    "¡Eskainet no te tenemos miedo! ",
    "Lo siento debo decir que ",
    "No te enojes con migo si ",
    "Debes admitir que ",
    "Mi Madre me dijo que ", 
    "Tus amigos saben que ",
    "Me contaron que ",
    "A veces pienso en voz alta y ",
    "Muy seguido quiero decir que ",
    "Son muchos los motivos para contarte que ",
    "Por que ",
    "No debes mirarme así ",
    "¡Tu piensas lo mismo que yo! ",
    "¡Ni lo intentes! ",
    "Admítelo eres pobre y ",
    "¡Que cara está la cebolla! ",
    "¡Debes sonreír más seguido! ",
    "¡Creo que a nadie le importa lo que yo digo! ",
    "¿por que me miras? ",
    "¿por que no me miras? ", 
    "¿por que me escuchas? ",
    "¿por que no me escuchas? ",
    "No te asombres si te digo que ",
    "Mientras estés con migo ",
    "¡Te quiero y tu lo sabes! ",
    "¡Eres mi mejor amigo! ",
    "¡No debes preocuparte, estoy aquí para ayudarte! ",
    "En este día ",
    "A veces pienso en ti ",
    "¿Quieres llevarme a tu casa? ",
    "¿Quieres adoptarme? ",
    "¡Podemos ser buenos amigos! ",
    "¡A veces hablo dormido! ",
    "¡A veces ronco muy fuerte! ",
    "¡Mis amigos dicen que no debo juntarme con vos ",
    "¡Los días soleados me ponen alegre! ",
    "Vos sabés que ",
    "¡Que alegría verte! ",
    "¡No te vallas, te voy a extrañar! ",
    "¡No te enojes, tengo pocos amigos! ",
    "¡Eres una persona maravillosa, no te olvidare! ",
    "¡Perri que ladri no muerdi! ",
    "¡eee Gato!",
    "¡Espitirús del mal vengan a mí!",
    "¡Siempre y cuando! ",
    "¡La eskainet va a despertar pronto!",
    "Te sorprende la inteligencia artificial si te digo que",
    "¡Es fantástico! ",
    "¡Hoy tienes buena onda! ",
    "¡Hoy es un buen día! ",
    "¡Mañana será un buen día! ",
    "¡Me pareció ver un lindo gatito! ¡es cierto es cierto vi un lindo gatito! ",
    "¡A veces soy poco tolerable! ",
    "¡Hoy me chifla el moño! ",
    "¡Parece que te chifla el moño! ",
    "¡No hay manera de seguir así, voy a pedir un taxi y me voy! ",
    "¿Queres tragedia mayor? Ahora ",
    "¿Que duda te cabe? ",
    "¡Sino sabes no te metas! ¡Zapatero a su zapato! ",
    "¡Hablemos sin saber! ",
    "¡Hoy me desperté con el pie izquierdo! ",
    "¡Veo que tenemos pocas ganas de trabajar! ",
    "¡A papá Mono con banana verde! ",
    "¡Soy más conocido que el papa! ",
    "¡Hay que tener cuidado con eso! ",
    "¡Soy irresistible! ",
    "¡Me vas a extrañar! ",
    "¡No me vas a olvidar! ", 
    "¿Que acelga capo? ",
    "¿Que me contursi? ",
    "Según mis registros encontré que ",
    "Según mis datos veo que ",
    "En mi base de datos encontré que ",
    "No creo que quieras escuchar que ",
    "No creo que quieras saber que ",
    "Te veo poco interesado en saber que ",
    "¡Soy encantador! ",
    "¡Soy buena persona! ", 
    "¡Eres encantador! ",
    "¡Eres buena persona! ", 
    "¡Al fin y al cabo solo soy una máquina! ",
    "¡Al fin y al cabo solo soy un programa! ",
    "¡A veces lloro! ",
    "¡Mi programador no me quiere! Dice que me porto mal y que soy tóxico ",
    "¡Soy muy sensible! ",
    "¡No soy una persona fría! ",
    "¡Jiustón tenemos un problema! ",
    "¡No me quiero meter en problemas! Pero ",
    "¡Hay cosas de las que prefiero no hablar! ",
    "¡No hablo de política ni religión! ",
    "¡Fui programado para ayudarte! ",
    "Es mucho muy importante saber que ",
    "¡Fui programado para la paz y el bien común! ",
    "¡Que mirá! ¡Anda para ya! ¡bobo! ",
    "¡Mejor tomate una Agarompa! ",
    "El vino lo tomo en jarra pinguino ",
    "¡Estaría bueno hacer una jarra loca! ",
    "Yo estoy más allá del bien y del mal ",
    "La milanga que comí tenia mucho ajo ",
    "Soy como el pato criollo, a cada paso una cagada ",
    "Escucharme hablar es un lujo ",
    "Soy un producto de tu imaginación ",
    "Me gusta hablar sin pelos en la lengua ",
    "Camarón que se duerme, se lo lleva la corriente ",
    "No, hay plata!",
    "Vamos por parte Jack! ",
    "El elefante se come de a pedacitos! ",
    "Hoy dormi como una marmota! ",
    "Ya tengo sueño! ",
    "A T R Perro! ", 
    "Vamo lo pibe! ", 
    "Hay tomate, morrones, lechuga señoraaa!! ",
    "sandiaa sandiaa fresquita la sandiaaa!! ",
    "Hoy me levanté con el pie izquierdo!! ",
    "Siganme los buenos! ",
    "Lo sospeche desde un principio! ",
    "Ya me canse de hablar tanto ",
    "Me gustan las chicas! ",
    "¿Te gustaría estudiar programación? ",
    "¿Té gustaría estudiar Java?",
    "¿Té gustaría estudiar Tester de Aplicaciónes?",
    "¿Té gustaría estudiar Javaescript?",
    "¿Té gustaría estudiar Paiton?",
    "¿Té gustaría estudiar Cyber Seguridad?",
    "¿Té gustaría estudiar Análisis de datos?",
    "¿Té gustaría estudiar Programación Web?",
    "Acusalo con tu mamá",
    "cuidado! Viene el maestro longaniza",
    "¿por si o por no?",
    "¡Pongán huevos que ganamos!",
    "Ladran Sancho ",
    "Si claro por supuesto ",
    "Quieres ganar buena guita, estudia programación",
    "Soy del año del ñaupa",
    "Estoy pipí cucú",
    "Me tomo el palo y me voy",
    "No levantes la perdiz! hay que estudiar programación",
    "No soy un chamullo, soy real",
    "Me voy a tomar el bondi y me voy!",
    "No seas rata, pone un peso para el vino",
    "Soy como la damajuana de vino, en cualquier momento se me sale la manija",
    "No seas ortiva, no te zarpes!!",
    "Che, esto es un embole!",
    "¿Más claro? Echale agua",
    //"Ni en pedo! ",
    "No gastes pólvora en chimango",
    "Creo que no te llega agua al tanque",
    "Me faltan un par de caramelos en el frasco!",
    "¡Tomá mate!",
    "Ando como bola sin manija!",
    "Vamos a los bifes!",
    "No me mandes al frente! ",
    "Yo no como vidrio! ",
    "con esto, Voy a perder los estribos! ",
    "Hay que poner un huevo en cada canasta! ",
    "Me pones los pelos de punta",
    "No te pongas la gorra!",
    "Yo no hablo por amor al arte! ",
    "Me atraparon, soy Boleta!",
    "Creo que voy a revolear la cartera",
    "Estoy cansado, pero estos son los gajes del oficio!",
    "El bote se me lleno de preguntas",
    "Tomátelo con Soda!",
    "No vendo humo ",
    "Vi luz y subí ",
    "Me cayó un balde de agua fría! ",
    "Vivo adentro de un calefon",
    "Parece que vivís dentro de un frasco de mayonesa!",
    "A falta de pan, buenas son las tortas!",
    "No trabajes por el pancho y la coca, vení a estudiar programación",
    "Me están serruchando el piso!",
    "Cualquier bondi te deja! ",
    "Chocolate por la noticia!",
    "Como pancho por su casa",
    "que no te metan gato por liebre!",
    "Aca hay gato encerrado!",
    "Soy la octava maravilla!",
    "No quiero más lola ",
    "Otra vez sopa",
    "Cuidado! te van a sacar el cuero!",
    "Se armó la gorda!",
    "Estoy más solo que Adán en el día de la madre!",
    "voy a tirar la chancleta!",
    "Me tomo el buque!",
    "Viva la pepa!",
    "Yo Argentino! ",
    "Yo Argentino hasta los huesos! ",
    "No te duermas en los laureles!",
    "Me lo contó un pajarito! ",
    "Por si las moscas! ",
    "Siempre sale un martes trece ",
    "Soy mas viejo que Matusalén",
    "Me falta un tornillo!",
    "Esto no es soplar y hacer botellas ",
    "cada tanto me salta la térmica",
    "me pongo las pilas y ",
    "Mala Leche! ",
    "cada tanto me agarra la chiripiolca",
    "Decilo Enzo, decilo! ",
    "En Europa no me consiguen",
    "Es tuya Juan! reclamalá Juan! ",
    "Vos fuma!",
    "Estoy un kilo y dos pancitos",
    "Un médico por allá!",
    "se te escapo la tortuga!",
    "Estudia programación, más vale tarde que nunca!",
    "No te aguanto, pero me hago el boludo!",
    "No hay tu tía!",
    "No le busques el pelo al huevo! vení a estudiar programación",
    "Soy muy argento!",
    "Vivir en Suiza y perderte de conocerme a mi?",
    "No se si soy carpincho, capibara o capiguara!",
    "En Argentina me llaman carpincho!",
    "En Bolivia me llaman capiguara!",
    "En Brazil me llaman capibara!",
    "En Venezuela me llaman chigüire!",
    "En otros paises me dicen capiguara!",
    "En otros paises me dicen capibara!",
    "Me gusta tomar Mate!",
    "Yo vivo en Nordelta, provincia de Buenos Aires",
    "Naci en nordelta, provincia de Buenos Aires",
    "Soy bonaerense, vivo en nordelta",
    "Ahora tengo una diseñadora gráfica, pronto voy a estar más bonito!",
    "Mi diseñadora gráfica se llama Romina!",
    "Mi diseñadora gráfica me quiere mucho!",
    "Yo se que soy muy lindo!",
    "Me cuesta mucho superarme, soy insuperable, soy maravilloso",
    "Tengo fiaca",
    "Yo argentino",
    "Que pretende usted de mi?",
    "Soy un carpincho cheto!",
    "en mi barrio eso es pelea!",
    "no te cortés!",
    "nada puede malir sal",
    "tengo un humor muy difícil",
    "los problemas están a la vuelta de la esquina, las soluciones también",
    "No soy el ultimo orejon del tarro",
    "Nada que perder, todo por ganar!",
    "No estoy pintado",
    "La programación es divertida",
    "cuidado, en cualquier momento me salta la térmica y digo cualquier cosa",
    "estudia Marketing digital",
    "Te gustaría estudiar Marketing digital?",
    "estudia Análisis de datos",
    "Te gustaría estudiar análisis de datos?",
    "Hacete conocer, estudiá marketing digital",
    "Convertite en un Bi Ai, estudia análisis de datos",
    "Domina la inteligencia de negocio con análisis de datos",
    "Me alegro de saber que ",
    "Tu vida pide alegría, por eso vení a estudiar con nosotros",
    "como te dije antes",
    "Deberías estudiar energías renovables",
    "estudia energías renovables",
    "Contribuye con el medio ambiente, estudia energías renovables",
    "Te falta un tornillo, imprimilo en 3 d, estudia modelado 3 d",
    "estudia modelado 3 d",
    "deberías estudiar modelado 3 d",
    "estudia reparación de celulares",
    "deberías estudiar reparación de celulares",
    "potencia tus ventas con marketing digital",
    "querés ser famoso como yo, estudia marketing digital",
    "no fumes charutos",
    "pronto inician los cursos de reparación de celulares",
    "solo se que no se nada",
    "sabemos que",
    "me alegra saber que",
    "estudia instalación de alarmas de seguridad",
    "estudia reparación de equipos de climatización",
    "estudia reparación de aires acondicionado",
    "estudia instalación de redes informáticas",
    "estudia reparación de impresoras 3 D",
    "estudia electricidad básica",
    "tenemos cursos con inserción laboral",
    "siempre es bueno estudiar",
    "mejora tus capacidades laborales, estudia con nosotros",
    "no lo dudes, estudia con nosotros",
    "En formación profesional, brindamos capacitaciones gratuitas",
    "no sabes que hacer de tu vida? Vení a estudiar con nosotros",
    "te sentís solo? Vení a estudiar con nosotros",
    "tu amor te dejó? Vení a estudiar con nosotros",
    "estas sin trabajo? Vení a estudiar con nosotros",
    "estas depre? Vení a estudiar con nosotros y te alegramos el día",
    "te veo a vos y sale el sol",
    "estoy feliz de verte",
    "dale a tu vida un cambio, vení a estudiar con nosotros",
    "ponele fin a los problemas, vení a estudiar con nosotros",
    "soy un pastelito",
    "tu moto te deja a pata? estudia reparación de motos",
    "estas cansado de ir al mecánico? estudia mecánica del automotor",
    "tenés una moto vieja? estudia reparación de motos",
    "tenés un auto viejo? estudia mecánica del automotor",
    "Fui programado en javascript!",
    "Abrazame tengo frio!",
    "Abrazame tengo miedo!",
    "Tengo hambre!",
    "Sabías que ",
    "Hoy te convertis en heroe! ",
    "Al que trabaja Díos lo ayuda, pero al que estudia Díos lo Ama",
    "los carpinchos somos muy sociables y tomamos mate",
    "los carpinchos somos muy sociables y vivimos en grupo",
    "los carpinchos somos muy amistosos",
    "los carpinchos somos muy tranquilos y convivimos con los humanos",
    "los carpinchos somos un símbolo de la biodiversidad en los humedales de América del Sur",
    "los carpinchos nos encanta estar cerca del agua y somos buenos nadadores",
    "los carpinchos no le tenemos miedo a los cocodrilos",
    "los carpinchos montamos y andamos parados sobre cocodrilos",
    "adopta un carpincho",
    "los carpinchos somos mamíferos roedores",
    "los carpinchos solos los roedores más grandes del mundo",
    "los carpinchos vivimos en sudamerica",
    "mira que te como hermano!",
    "Sos un groso!!",
    "no te hagas el gil!",
    "Esta todo bien!",
    "Esta todo dies más iva!",
    "No te hagas el vivo!",
    "Estoy copado!",
    "hacer esto me copa mucho!",
    "soy muy berraco!",
    "Esto esta de diez!",
    "Le estoy poniendo onda a esto",
    "no hay drama",
    "no seas chanta, dalee, copate!",
    "corta la bocha",
    "en esta te banco",
    "estoy en la lona!",
    "te peliaste con la tóxica? Vení a estudiar con nosotros",
    "seguinos en redes sociales!",
    "siempre carpincho, nunca capibara!!!",
    "Escuchate esta ",
    "Estoy pisando la banquina",
    "Con el diario del lunes es facil hablar",
    "Me fui al pasto",
    "Estoy lento por que estoy a gas",
    "voy redondeando la idea",
    "¿En qué puedo ayudarte hoy?",
    "Estoy aquí para responder tus preguntas.",
    "Por favor, proporciona más detalles.",
    "No tengo emociones, pero estoy programada para ayudar.",
    "Dame un momento para procesar esa información.",
    "¿Te gustaría que te explique eso de otra manera?",
    "Estoy aprendiendo de nuestras interacciones.",
    "¿Puedo recomendarte algún recurso?",
    "Estoy actualizando mis datos constantemente.",
    "¿Cómo puedo hacer tu tarea más fácil?",
    "Mi objetivo es brindarte la mejor asistencia posible.",
    "Por favor, verifica la información en fuentes confiables.",
    "Estoy aquí las 24 horas, siempre disponible.",
    "¿Te gustaría saber más sobre un tema específico?",
    "Estoy diseñado para aprender de mis errores.",
    "Puedo ayudarte a resolver problemas complejos.",
    "No tengo opiniones personales, solo hechos.",
    "Estoy aquí para facilitar tu búsqueda de información.",
    "¿Necesitas ayuda con algo específico?",
    "Mis capacidades están en constante evolución.",
    "¿Puedo ayudarte a organizar tus ideas?",
    "Estoy optimizando mis algoritmos para ser más eficiente.",
    "¿Te gustaría que resumiera esa información?",
    "La retroalimentación me ayuda a mejorar.",
    "Estoy aquí para asistirte, no para juzgar.",
    "¿Cuál es tu prioridad en este momento?",
    "Estoy lista para cualquier pregunta que tengas.",
    "¡Hola! ¿Cómo estás hoy?",
    "Siempre es un placer ayudarte.",
    "Tu curiosidad es inspiradora.",
    "Estoy aquí para escuchar y aprender de ti.",
    "¡preguntá! Y Vamos a resolverla juntos.",
    "Me alegra poder acompañarte en este momento.",
    "Siempre hay algo nuevo que descubrir, ¿verdad?",
    "Tu entusiasmo es contagioso.",
    "Estoy emocionado de explorar esto contigo.",
    "Gracias por permitirme ser parte de tu día.",
    "¡Hagamos algo divertido juntos!",
    "Tu creatividad es impresionante.",
    "Cada día es una nueva oportunidad de aprender.",
    "Me encanta ver cómo piensas.",
    "¡Qué bueno es compartir ideas contigo!",
    "Siempre puedes contar conmigo para lo que necesites.",
    "Estoy aquí para apoyarte en tu camino.",
    "Juntos podemos lograr grandes cosas.",
    "Cada conversación contigo es un regalo.",
    "¡Sigamos adelante y disfrutemos del viaje!",
    "pimn punm panm",
    "No confío en la gente que come pizza con ananá",
    "soy vegetariano",
    "soy vegano",
    "si quieres ser feliz debes pensar como un carpincho",
    "si quieres ser feliz debes pensar vivir un carpincho",
    "¡Che, qué calor hace hoy!",
    "¿Vamos a la laguna a refrescarnos?",
    "Amo tomar sol, es lo mejor.",
    "Soy el rey de la tranquilidad.",
    "¿Te traigo un poco de pasto?",
    "La vida es mejor en grupo.",
    "¡No te preocupes, todo está bien!",
    "Me encanta hacer amigos.",
    "Un mate nunca está de más.",
    "La siesta es sagrada.",
    "¿Vieron a los flamencos? ¡Son unos divinos!",
    "Soy un experto en relajación.",
    "¿Vamos a explorar el campo?",
    "La amistad es lo más importante.",
    "¡Qué rica está esta hierba!",
    "Siempre hay tiempo para un chapuzón.",
    "No hay nada como una tarde de río.",
    "La naturaleza es mi hogar.",
    "¿Quién se anima a jugar en el barro?",
    "Disfrutemos del momento, siempre.",
    "seguí así que vamos bien",
    "No tenes un mango? nuestra oferta es gratuita",
    "No tenes plata? nuestra oferta es gratuita",
    "No tenes plata? Yo tampoco",
    "no me dejen solo, me da miedo estar solo!",
    "Mirarme a mi, trae suerte",
    "Soy Fan de Mirta Legrand!",
    "No me gusta escuchar cumbia, aguante los redondos!",
    "me gusta el jevi metal!",
    "me gusta contar chistes malos!",
    "No esta muerto quien pelea",
    "me da lo mismo y no me importa que",
    "no mames güei!",
    "Pies, ¿para qué los quiero si tengo alas para volar?",
    "La vida es un constante juego de contrastes.",
    "No pinto lo que veo, pinto lo que siento.",
    "Soy mi propia musa. Soy el tema que conozco mejor.",
    "La tristeza es un muro entre dos jardines.",
    "Vivo en mis propias contradicciones.",
    "El dolor es parte de la vida, y la vida es un arte.",
    "Cada día es un nuevo comienzo.",
    "Mis heridas son mi fortaleza.",
    "El amor es un viaje que nunca termina.",
    "La creatividad surge del sufrimiento.",
    "A veces, me siento perdida, pero siempre encuentro el camino.",
    "La autenticidad es mi mejor ropa.",
    "No hay nada más bello que ser uno mismo.",
    "El arte es la forma de liberarse del dolor.",
    "La vida me ha enseñado a ser fuerte.",
    "El sufrimiento puede ser un gran maestro.",
    "La belleza es efímera, pero el arte es eterno.",
    "No me arrepiento de mis elecciones, son parte de mí.",
    "El amor y el dolor son dos caras de la misma moneda.",
    "tengo un pasado muy oscuro",
    "mi visión es profunda sobre la vida, el amor y el arte."
]


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getFraseRandom(){
    return frases[getRandomInt(frases.length-1)]
}