function calcularMerma(pergamino, verde, tostado, precioPergamino) {
    // Calcular el porcentaje de merma del café verde
    const mermaVerde = 100 * (1 - verde / pergamino);
    
    // Calcular el porcentaje de merma del café tostado
    const mermaTostado = 100 * (1 - tostado / verde);
    
    // Calcular el precio del café tostado por kilo
    const precioTostado = precioPergamino * pergamino / tostado;
    
    return [mermaVerde, mermaTostado, precioTostado];
}
