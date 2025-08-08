// Soma dos números Pares
const n = Math.floor(Math.random() * 31);
console.log("Numero escolhido: " + n);

let soma = 0;
for (let i = 2; i <= n; i += 2) {
    console.log(i);
    soma += i;
}

console.log("Soma dos pares:", soma);