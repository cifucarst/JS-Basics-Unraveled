// Definimos la función factorial iterativa
function factorial(n) {
    let answer = 1;
    while (n > 1) {
        answer *= n;
        n -= 1;
    }
    return answer;
}

// Definimos la función factorial recursiva
function factorial_r(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial_r(n - 1);
}

const n = 1000; // Definimos el valor de n

// Medimos el tiempo de ejecución para factorial_r
const startR = performance.now();
factorial_r(n);
const endR = performance.now();
console.log("Tiempo de ejecución (factorial_r):", endR - startR);

// Medimos el tiempo de ejecución para factorial
const start = performance.now();
factorial(n);
const end = performance.now();
console.log("Tiempo de ejecución (factorial):", end - start);