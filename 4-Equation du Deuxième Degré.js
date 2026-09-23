const prompt = require("prompt-sync")();
const a = Number(prompt("Entrer a: "));
const b = Number(prompt("Entrer b: "));
const c = Number(prompt("Enter c"));

const delta = b**2-4*a*c;
const x = -b/(4*a*c)
const x1 = (-b + Math.sqrt(delta))/2*a;
const x2 = (-b - Math.sqrt(delta))/2*a;

if(delta < 0){
    console.log("l'équation n'admet pas de solution");
} else if (delta === 0){
    console.log("l'équation admet une solution double: ", x)
} else if (delta > 0){
    console.log("l'équation admet deux solutions: ", x1, x2)
}