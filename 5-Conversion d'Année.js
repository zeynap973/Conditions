const prompt = require ("prompt-sync")();
const annee = Number(prompt("Entrer l'année: "));

const Mois = annee * 12;
const Jour = annee * 365;
const Heure = Jour * 24;
const Minutes = Heure * 60;
const Secondes = Minutes * 60;

console.log(`L'année ${annee} est: 
   - ${Mois} mois
   - ${Jour} jours
   - ${Heure} heures
   - ${Minutes} minutes
   - ${Secondes} secondes`)