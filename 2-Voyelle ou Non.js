const prompt = require("prompt-sync")();
const lettre = prompt("Entrer une lettre: ");

switch(lettre){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
        console.log("Voyelle");
        break;
    default:
        console.log("Consonne");
}