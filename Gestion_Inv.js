
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;  // Se asigna Nombre
        this.precio = precio;  // Se asigna Precio
    }

    //Se muestran detalles del producto
    Detalles() {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }
}

// Crear instancias de la clase Producto
const producto1 = new Producto('Creatina', 19990);
const producto2 = new Producto('Proteina', 25000);
const producto3 = new Producto('Omega3', 23000);

producto1.Detalles();
producto2.Detalles();
producto3.Detalles();

