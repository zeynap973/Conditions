const prompt = require("prompt-sync")();
const nombre = Number(prompt("Entrer un nombre: "));

if (nombre < 0){
    console.log("le nombre est négatif")
} else if (nombre > 0){
    console.log("le nombre est positif")
} else {
    console.log("le nombre est null")
}

