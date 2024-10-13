//FUNCION ANONIMA AUTOEJECUTABLE
(function() {
    console.log("Bienvenido a Fybeca. Explora nuestras ofertas.");
})();

//FUNCION DECLARADA
function mostrarOfertas() {
    console.log("Mostrando ofertas del día...");
}
mostrarOfertas();

//Funcion expresada
const calcularTotal = (precios) => {
    const total = precios.reduce((acumulador, precio) => acumulador + precio, 0);
    return total;
};


const preciosProductos = [5.99, 12.50, 7.30]; 
const totalCarrito = calcularTotal(preciosProductos);
console.log(`El total de tu compra es: $${totalCarrito}`);



//Expresiones y argumentos
const procesarCompra = (producto, cantidad) => {
    console.log(`Compraste ${cantidad} unidades de ${producto}`);
};
procesarCompra("Sérum Effaclar Ultra Concentré Piel Grasa 30 Ml Unidad", 2);
