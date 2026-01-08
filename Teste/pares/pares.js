let lista = [1, 2, 3, 4, 5, 6];

let pares = lista.filter(function (numero) {
    return numero % 2 == 0;
});
console.log(pares);