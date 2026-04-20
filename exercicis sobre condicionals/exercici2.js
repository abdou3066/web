let contrasenya = "hola123";
let usuari = prompt("Introdueix la contrasenya:");

if (usuari.toLowerCase() === contrasenya.toLowerCase()) {
    console.log("Contrasenya correcta.");
} else {
    console.log("Contrasenya incorrecta.");
}
