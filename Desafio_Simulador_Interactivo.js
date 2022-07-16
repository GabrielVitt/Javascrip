alert ("Bienvendio/a")

let personas = parseInt(prompt("Numere las cantidad de personas a ingresar"))
let edad;
let edadAcumulada = 0;

function PromedioEdades(edad, cant) {
    let promedio = edad / cant;
    alert (promedio)
    return promedio;
}

for (let i = 0; i < personas ; i ++) {
    edad = parseInt (prompt ("Ingrese sus edades"))
    edadAcumulada += edad;
    console.log(edadAcumulada);
}
PromedioEdades (edadAcumulada, personas)
