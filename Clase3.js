
// Pedir un numero mediante prompt y sumarle otro numero en cada repeticion, realizando una salida por cada resultado

let numero = parseInt (prompt ("Favor ingresar un numero"));

for (let i = 1; i <= 10; i++) {
    let resultado = numero *i ;
    alert (numero +"x"+ i + "=" + resultado);
}

