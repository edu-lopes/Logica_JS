// Soma dos Dígitos
const n = Math.floor(Math.random() * 1001);

let convert = n.toString();
let separar = convert.split('');
let reconventer = separar.map(Number);
let soma = reconventer.reduce((acc, curr) => acc + curr, 0);

console.log(n);
console.log(soma);