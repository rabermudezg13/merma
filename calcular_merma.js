function calcularMerma(pergamino, verde, tostado, precioPergamino) {
    // Calcular el porcentaje de merma del café verde
    const mermaVerde = 100 * (1 - verde / pergamino);
    
    // Calcular el porcentaje de merma del café tostado
    const mermaTostado = 100 * (1 - tostado / verde);
    
    // Calcular el precio del café tostado por kilo
    const precioTostado = precioPergamino * pergamino / tostado;
    
    return [mermaVerde, mermaTostado, precioTostado];
}

// Función para solicitar un número al usuario
function pedirNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}

// Solicitar los valores al usuario en el orden correcto
const pergamino = pedirNumero("Ingrese el peso del café en pergamino (kg): ");
const verde = pedirNumero("Ingrese el peso del café verde (kg): ");
const tostado = pedirNumero("Ingrese el peso del café tostado (kg): ");
const precioPergamino = pedirNumero("Ingrese el precio del café en pergamino (por kg): ");

// Calcular y mostrar los resultados
const [mermaVerde, mermaTostado, precioTostado] = calcularMerma(pergamino, verde, tostado, precioPergamino);

console.log(`Merma del café verde: ${mermaVerde.toFixed(2)}%`);
console.log(`Merma del café tostado: ${mermaTostado.toFixed(2)}%`);
console.log(`Precio del café tostado (por kg): $${precioTostado.toFixed(2)}`);
