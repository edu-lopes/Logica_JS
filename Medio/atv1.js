// Fatorial
const n = Math.floor(Math.random() * 11);
console.log(n);

function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(n));