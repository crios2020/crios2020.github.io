async function cargarDolarOficial() {
    try {
        const response = await fetch('https://dolarapi.com/v1/dolares/oficial');
        const dolar = await response.json();
        document.getElementById('dolarOficialNombre').textContent = dolar.nombre;
        document.getElementById('dolarOficialCompra').textContent = 'Compra: $ ' + formatoMoneda(dolar.compra);
        document.getElementById('dolarOficialVenta').textContent = 'Venta: $ ' + formatoMoneda(dolar.venta);
        document.getElementById('dolarOficialFecha').textContent = 'Actualizado: ' + new Date(dolar.fechaActualizacion).toLocaleString('es-AR');
    } catch (error) {
        console.error('Error obteniendo cotización:', error);
        document.getElementById('dolarNombre').textContent = 'Error de conexión';
    }
}

async function cargarDolarBlue() {
    try {
        const response = await fetch('https://dolarapi.com/v1/dolares/blue');
        const dolar = await response.json();
        document.getElementById('dolarBlueNombre').textContent = dolar.nombre;
        document.getElementById('dolarBlueCompra').textContent = 'Compra: $ ' + formatoMoneda(dolar.compra);
        document.getElementById('dolarBlueVenta').textContent = 'Venta: $ ' + formatoMoneda(dolar.venta);
        document.getElementById('dolarBlueFecha').textContent = 'Actualizado: ' + new Date(dolar.fechaActualizacion).toLocaleString('es-AR');
    } catch (error) {
        console.error('Error obteniendo cotización:', error);
        document.getElementById('dolarNombre').textContent = 'Error de conexión';
    }
}

async function cargarDolarMayorista() {
    try {
        const response = await fetch('https://dolarapi.com/v1/dolares/mayorista');
        const dolar = await response.json();
        document.getElementById('dolarMayoristaNombre').textContent = dolar.nombre;
        document.getElementById('dolarMayoristaCompra').textContent = 'Compra: $ ' + formatoMoneda(dolar.compra);
        document.getElementById('dolarMayoristaVenta').textContent = 'Venta: $ ' + formatoMoneda(dolar.compra);
        document.getElementById('dolarMayoristaFecha').textContent = 'Actualizado: ' + new Date(dolar.fechaActualizacion).toLocaleString('es-AR');
    } catch (error) {
        console.error('Error obteniendo cotización:', error);
        document.getElementById('dolarNombre').textContent = 'Error de conexión';
    }
}

function cargar() {

    // Carga inicial
    cargarDolarOficial();
    cargarDolarBlue();
    cargarDolarMayorista();

    // Actualizaciones automáticas
    setInterval(cargarDolarOficial, 60000);
    setInterval(cargarDolarBlue, 60000);
    setInterval(cargarDolarMayorista, 60000);
}

cargar();

function formatoMoneda(valor) {
    return valor.toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

//Chart.defaults.font.family = 'Segoe UI';
//Chart.defaults.color = '#64748b';

/* =====================
   EVOLUCIÓN DEL DÓLAR
===================== */

/*
new Chart(
    document.getElementById('chartDolar'),
    {
        type: 'line',
        data: {
            labels: [
                'Ene',
                'Feb',
                'Mar',
                'Abr',
                'May',
                'Jun'
            ],
            datasets: [{
                label: 'Dólar',
                data: [
                    980,
                    1020,
                    1070,
                    1130,
                    1180,
                    1245
                ],
                borderColor: '#16a34a',
                backgroundColor: 'rgba(22,163,74,0.15)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
);
*/
/* =====================
   CARTERA
===================== */
/*
new Chart(
    document.getElementById('chartPortfolio'),
    {
        type: 'doughnut',
        data: {
            labels: [
                'Acciones',
                'Bonos',
                'Cripto',
                'Liquidez'
            ],
            datasets: [{
                data: [
                    40,
                    25,
                    20,
                    15
                ],
                backgroundColor: [
                    '#16a34a',
                    '#22c55e',
                    '#4ade80',
                    '#86efac'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);
*/
/* =====================
   VOLUMEN OPERADO
===================== */
/*
new Chart(
    document.getElementById('chartVolume'),
    {
        type: 'bar',
        data: {
            labels: [
                'Lun',
                'Mar',
                'Mié',
                'Jue',
                'Vie'
            ],
            datasets: [{
                label: 'Millones',
                data: [
                    120,
                    180,
                    150,
                    220,
                    260
                ],
                backgroundColor: '#16a34a',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);
*/