/* 
let num1 = parseFloat(prompt("Saisir le premier nombre:"));
let num2 = parseFloat(prompt("Saisir le deuxième nombre:"));
console.log("La somme est: " + (num1 + num2));
console.log("La différence est: " + (num1 - num2));
console.log("Le produit est: " + (num1 * num2));
console.log("Le quotient est: " + (num1 / num2));
*/
/*
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
*/
const questions = [
    { q: "Quelle est la capitale du Maroc ?", a: "Rabat" },
    { q: "Combien font 5 + 5 ?", a: "10" },
    { q: "Quelle est la couleur du ciel ?", a: "Bleu" }
];
let scoreQuiz = 0;
for (let i = 0; i < questions.length; i++) {
    let reponse = prompt(questions[i].q)
    if (reponse && reponse.toLowerCase() === questions[i].a.toLowerCase()) {
        alert("Bonne réponse !");
        scoreQuiz++;
    } else {
        alert("Mauvaise réponse. La réponse était : " + questions[i].a);
    }
}
alert("Quiz terminé ! Votre score est : " + scoreQuiz + "/" + questions.length);
console.log("Score final Quiz : " + scoreQuiz + "/3");