"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero1 = readlineSync.questionInt("Ingrese un numero");
var numero2 = readlineSync.questionInt("Ingrese un numero");
var opcionMenu = readlineSync.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir");
//let resultado = calcularResultado(numero1,numero2, opcionMenu);
function calcularResultado(numero1, numero2, opcionMenu) {
    var resultado = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
calcularResultado(numero1, numero2, opcionMenu);
