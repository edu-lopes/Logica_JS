// Números Primos
const n = Math.floor(Math.random() * 51);

function primo(num) {
    if (num < 2) {
        console.log(num + " não é número primo!");
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " não é número primo!");
            return;
        }
    }
    console.log(num + " é número primo!");
}

primo(n);