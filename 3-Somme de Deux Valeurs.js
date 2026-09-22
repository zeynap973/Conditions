const prompt = require("prompt-sync")();
const v1 = parseInt(prompt("Entrer la 1ère valeur: "))
const v2 = parseInt(prompt("Entrer la 2ème valeur: "))

const Somme = v1 + v2;

if (v1 === v2){
    console.log(Somme*3);
} else {
    console.log(Somme);
}