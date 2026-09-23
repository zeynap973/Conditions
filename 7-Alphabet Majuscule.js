const prompt = require ("prompt-sync")();
const lettre = prompt("Entrer une lettre: ");

if (lettre >= 'A' && lettre <= 'Z'){
    console.log("la lettre est majuscule")
} else {
    console.log("la lettre est miniscule")
}