const interes = 1.45;
const Ferrari = 80000;
const Toyota = 28000;
const Hyunday = 17000;
/* toFixed es para redondear un importe*/
let nombreCompleto = "";

function indicaTusGanancias(gananciasMensuales) {

    nombreCompleto = prompt("Ingresa tu nombre completo:")
    if (nombreCompleto !== "") {
        console.log("Bienvenid@:", nombreCompleto)
    } else {
        console.warn("Ingresa tu nombre, por favor.")
    }

    gananciasMensuales = prompt("Ingresa cuanto ganas al mes")
    if (gananciasMensuales > 4000) {
        console.log("Puedes optar por un coche de gama alta");
    } else if (gananciasMensuales > 2000) {
        console.log("Puedes optar por un coche de gama media");
    } else if (gananciasMensuales > 1000) {
        console.log("Puedes optar por un coche de gama baja");
    } else {
        console.log("Lo siento, no es posible financiar tu coche, si deseas, puedes comprarlo de contado");
    }
}

function CuotasFerrari (cuotas, interes) {
    let montoPagar = Ferrari * interes;
    for (let i= 1; i<=cuotas; i++) {
        console.log("Si quieres fraccionar el pago en  " + i + " cuotas, deberás pagar " + (montoPagar / cuotas) .toFixed(2)+"€ cada mes")

    }
}

CuotasFerrari (3, interes)