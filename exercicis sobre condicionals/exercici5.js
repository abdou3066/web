let edat = parseInt(prompt("Introdueix la teva edat:"));
let ingressos = parseFloat(prompt("Introdueix els teus ingressos mensuals:"));

if (edat > 16 && ingressos >= 1000) {
    console.log("Has de tributar.");
} else {
    console.log("No has de tributar.");
}
