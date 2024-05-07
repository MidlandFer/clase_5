"use strict";
/*import * as readlineSync from "readline-sync";

let numero1:number=readlineSync.questionInt("Ingrese un numero: ");
let numero2:number=readlineSync.questionInt("Ingrese un numero: ");
let opcionMenu:number=readlineSync.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
let resultadoFuncion:number=0;

function calcularResultado (numero1:number,numero2:number, opcionMenu:number):number{
let resultado:number=0;
if (opcionMenu ==1){
    resultado = numero1 + numero2;
    }
else if (opcionMenu == 2){
    resultado = numero1 - numero2;
}

return resultado;
}

resultadoFuncion=calcularResultado(numero1,numero2,opcionMenu);
console.log("el Resultado es:   ",resultadoFuncion);
*/
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dividir(numero1, numero2) {
    if (numero2 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return numero1 / numero2;
}
function calcularResultado(numero1, numero2, operacion) {
    switch (operacion) {
        case '+':
            return sumar(numero1, numero2);
        case '-':
            return restar(numero1, numero2);
        case '*':
            return multiplicar(numero1, numero2);
        case '/':
            return dividir(numero1, numero2);
        default:
            throw new Error("Operación no válida");
    }
}
function main() {
    var numero1 = readlineSync.questionInt("Ingrese el primer número: ");
    var numero2 = readlineSync.questionInt("Ingrese el segundo número: ");
    var operacion = readlineSync.question("Ingrese la operación (+, -, *, /): ");
    try {
        var resultado = calcularResultado(numero1, numero2, operacion);
        console.log("El resultado es:", resultado);
    }
    catch (error) {
        console.error("Error:", error.message);
    }
}
main();
