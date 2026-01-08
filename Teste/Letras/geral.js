let texto = 'Vogais, Consoantes, e Mais!!!';

let geral = function () {
    let CtgVogais = 0;
    let CtgConsoante = 0;
    let CtgEspaco = 0;
    let CtgCaractere = 0;
    let letraVogais = 'aeiouAEIOU';
    let letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let espacoVazio = ' ';

    for (let i = 0; i < texto.length; i++) {
        if (letraVogais.includes(texto[i]) && !espacoVazio.includes(texto[i])) {
            CtgVogais++;
        }

        if (letras.includes(texto[i]) && !letraVogais.includes(texto[i]) && !espacoVazio.includes(texto[i])) {
            CtgConsoante++;
        }

        if (espacoVazio.includes(texto[i])) {
            CtgEspaco++;
        }

        if (!letras.includes(texto[i]) && !letraVogais.includes(texto[i]) && !espacoVazio.includes(texto[i])) {
            CtgCaractere++;
        }
    }
    let txtPronto = "Contagem Vogais: " + CtgVogais + "," + " Contagem Consoantes: " + CtgConsoante + "," + " Contagem de Espaços: " + CtgEspaco + "," + " Contagem de Caracteres Especias: " + CtgCaractere;
    return txtPronto;
}

console.log(geral());