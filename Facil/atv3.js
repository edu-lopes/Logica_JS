//Par ou Ímpar
const n = Math.floor(Math.random() * 101);
console.log(n)

function verificar() {
    if (n % 2 == 0) {
        console.log("O número " + n + " é Par!");
    }

    else {
        console.log("O número " + n + " é Impar!");
    }
}

verificar();