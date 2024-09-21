// Solicita al usuario que ingrese un número
var numero = prompt("Ingresa un número:");

// Convierte el valor ingresado a número
numero = parseInt(numero);

// Verifica si el número es par o impar
if (numero % 2 === 0) {
    alert("El número " + numero + " es par.");
} else {
    alert("El número " + numero + " es impar.");
}
