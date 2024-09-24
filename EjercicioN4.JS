// Tarifa por hora según el turno
const tarifaDiurna = 12000;
const tarifaNocturna = 16000;

// Incremento los domingos
const incrementoDiurnoDomingo = 2000;
const incrementoNocturnoDomingo = 3000;

// Duración del turno en horas
const horasPorTurno = 10;

// Función para calcular el pago diario
function calcularPago(turno, esDomingo) {
    let tarifa = 0;
    
    // Definir la tarifa según el turno y el día
    if (turno === 'diurno') {
        tarifa = tarifaDiurna + (esDomingo ? incrementoDiurnoDomingo : 0);
    } else if (turno === 'nocturno') {
        tarifa = tarifaNocturna + (esDomingo ? incrementoNocturnoDomingo : 0);
    }

    // Retornar el pago diario
    return tarifa * horasPorTurno;
}

// Empleado 1
const empleado1 = {
    nombre: 'Empleado 1',
    dias: {
        lunes: calcularPago('nocturno', false),
        martes: calcularPago('nocturno', false),
        miercoles: calcularPago('nocturno', false),
        jueves: calcularPago('diurno', false),
        viernes: calcularPago('diurno', false),
        sabado: 0,  // No trabaja
        domingo: 0  // No trabaja
    },
    totalSemanal: function() {
        return Object.values(this.dias).reduce((acc, pago) => acc + pago, 0);
    }
};

// Empleado 2
const empleado2 = {
    nombre: 'Empleado 2',
    dias: {
        lunes: 0,  // No trabaja
        martes: calcularPago('nocturno', false),
        miercoles: calcularPago('nocturno', false),
        jueves: calcularPago('nocturno', false),
        viernes: 0,  // No trabaja
        sabado: 0,  // No trabaja
        domingo: calcularPago('diurno', true)  // Diurno con incremento de domingo
    },
    totalSemanal: function() {
        return Object.values(this.dias).reduce((acc, pago) => acc + pago, 0);
    }
};

// Empleado 3
const empleado3 = {
    nombre: 'Empleado 3',
    dias: {
        lunes: 0,  // No trabaja
        martes: 0,  // No trabaja
        miercoles: calcularPago('diurno', false),
        jueves: calcularPago('diurno', false),
        viernes: calcularPago('diurno', false),
        sabado: calcularPago('nocturno', false),
        domingo: calcularPago('nocturno', true)  // Nocturno con incremento de domingo
    },
    totalSemanal: function() {
        return Object.values(this.dias).reduce((acc, pago) => acc + pago, 0);
    }
};

// Mostrar los resultados
console.log(`${empleado1.nombre}: Pago semanal = ${empleado1.totalSemanal()} CLP`);
console.log(`${empleado2.nombre}: Pago semanal = ${empleado2.totalSemanal()} CLP`);
console.log(`${empleado3.nombre}: Pago semanal = ${empleado3.totalSemanal()} CLP`);
