let num1 = parseFloat(prompt("Introdueix el primer nombre:"));
let num2 = parseFloat(prompt("Introdueix el segon nombre:"));

if (num2 === 0) {
    console.log("Error: no es pot dividir entre zero.");
} else {
    console.log("Resultat:", num1 / num2);
}
