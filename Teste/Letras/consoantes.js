let texto = 'Consoantes e Mais';

let consoantes = function () {
    let contagem = 0;
    let letraVogais = 'aeiouAEIOU';
    let espacoVazio = ' ';

    for (let i = 0; i < texto.length; i++) {
        if (!letraVogais.includes(texto[i]) && !espacoVazio.includes(texto[i])) {
            contagem++;
        }
    }

    return contagem;
}

console.log('Quantidade de consoantes: ' + consoantes());