// Clase Trabajador
class Trabajador {
    constructor(nombre, sueldo) {
        this.nombre = nombre;  
        this.sueldo = sueldo;  
    }

    // Método para mostrar los detalles del trabajador
    DetallesT() {
        console.log(`Trabajador: ${this.nombre}, Sueldo: $${this.sueldo}`);
    }
}

// Clase Gerente que hereda de Trabajador
class Gerente extends Trabajador {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    // Método para mostrar los detalles del gerente
    DetallesG() {
        console.log(`Gerente: ${this.nombre}, Sueldo: $${this.sueldo}, Departamento: ${this.departamento}`);
    }
}

// Se crea una instancia de la clase Trabajador
const trabajador1 = new Trabajador('Luis', 20000);
const trabajador2 = new Trabajador('Louis', 25000);

// Se crea una instancia de la clase Gerente
const gerente1 = new Gerente('Lewis', 20000, 'Departamento de Prevención de Riesgos');
const gerente2 = new Gerente('Jorge', 25000, 'Departamento de Recursos Humanos');

// Se muestra la información 
trabajador1.DetallesT();
trabajador2.DetallesT();
gerente1.DetallesG();
gerente2.DetallesG();





