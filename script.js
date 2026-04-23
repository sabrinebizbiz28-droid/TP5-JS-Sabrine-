/* 
let num1 = parseFloat(prompt("Saisir le premier nombre:"));
let num2 = parseFloat(prompt("Saisir le deuxième nombre:"));
console.log("La somme est: " + (num1 + num2));
console.log("La différence est: " + (num1 - num2));
console.log("Le produit est: " + (num1 * num2));
console.log("Le quotient est: " + (num1 / num2));
*/
let nombreADeviner = Math.floor(Math.random() * 10) + 1;
let tentative;
let score = 0;
while (tentative != nombreADeviner) {
    tentative = prompt("Devinez le nombre entre 1 et 10 :");
    score++;
    if (tentative > nombreADeviner) {
        alert("Plus petit !");
    } else if (tentative < nombreADeviner) {
        alert("Plus grand !");
    }
}
alert("Bravo ! Vous avez trouvé le nombre en " + score + " tentatives.");
console.log("Score final : " + score);