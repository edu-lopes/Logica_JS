let texto = 'Vogais';

let vogais = function () {
    let contagem = 0;
    let letraVogais = 'aeiouAEIOU';

    for (let i = 0; i < texto.length; i++) {
        if (letraVogais.includes(texto[i])) {
            contagem++;
        }
    }

    return contagem;
}

console.log('Quantidade de vogais: ' + vogais());