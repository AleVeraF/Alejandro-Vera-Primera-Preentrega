/* const interes = 1.18;
const Ferrari = 80000;
const Toyota = 28000;
const Hyunday = 17000;
/* toFixed es para redondear un importe
let nombreCompleto = "";

function indicaTusGanancias(gananciasMensuales) {

    nombreCompleto = prompt("Ingresa tu nombre completo:")
    if (nombreCompleto !== "") {
        console.log("Bienvenid@:", nombreCompleto + ". Vamos a hacerte solo una pregunta para ver que tipo de coche puedes financiar")
    } else {
        console.warn("Ingresa tu nombre, por favor.")
    }

    gananciasMensuales = prompt("Ingresa cuanto ganas al mes")
    if (gananciasMensuales > 4000) {
        console.log("Puedes optar por un coche de gama alta");
        CuotasCoche (interes)
    } else if (gananciasMensuales > 2000) {
        console.log("Puedes optar por un coche de gama media");
        CuotasCoche (interes)
    } else if (gananciasMensuales > 1000) {
        console.log("Puedes optar por un coche de gama baja");
        CuotasCoche (interes)
    } else {
        console.log("Lo siento, no es posible financiar tu coche, si deseas, puedes comprarlo de contado");
        return;
    }
}

function CuotasCoche (interes) {
    let monto = prompt("Indica el monto que deseas financiar para la compra de tu coche")
    let cuotas = prompt ("Indica en cuantas cuotas deseas pagar el coche")
    let montoPagar = (parseInt (monto) * interes);
    for (let i= 1; i<=cuotas; i++) {
        console.log("Cuota " + i + " importe a pagar: " + (montoPagar / cuotas) .toFixed(2)+"€")

    }
}
indicaTusGanancias () */

/*ESTOS SON ARRAY*/ const cochesGamaalta = ['Ferrari', 'Bugati', 'Tesla', 'Laborgini']
                   
/*ESTOS SON ARRAY*/ const cochesGamamedia = ['Toyota', 'Volswagen', 'Peagot', 'Audi', 'AlfaRomeo',];

/*ESTOS SON ARRAY*/ const cochesGamabaja = ['Hyundai', 'Kia', 'MG', 'Fiat'];

function cochesdisponibles () {

    for (let i= 0; i < cochesGamaalta.length; i++)
        console.log(cochesGamaalta [i])

}

function agregaCocheGamaAlta () {
    let nuevoCoche = prompt ("Ingresa el nuevo coche")
   /*Con el método push agregas nuevo producto al ARRAY*/ */ cochesGamaalta.push (nuevoCoche)
}

agregaCocheGamaAlta ()

// console.table (array) nos da los datons en la consola en una tabla