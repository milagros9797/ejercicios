let nombre = prompt("decime tu nombre")
alert("bienvenido " + nombre)

//ejercicio 1, pedir datos con prompt


let numero1 = prompt("escribe el primer numero para hacer una operacion");
let elegirOperacion = prompt("escribe la operacion que quieres hacer: sumar, restar, multiplicar,dividir");
let numero2 = prompt("escribe el segundo numero de la operacion");
let operacion = ["sumaste", "restaste", "multiplicaste", "dividiste"]
let resultado1 = Number(numero1) + Number(numero2);
let resultado2 = Number(numero1) - Number(numero2);
let resultado3 = Number(numero1) * Number(numero2);
let resultado4 = Number(numero1) / Number(numero2);

if (elegirOperacion == "sumar") {
    console.log("el resultado de la suma es " + resultado1);
    alert(operacion[0]);
}
else if (elegirOperacion == "restar") {
    console.log("el resultado de la resta es " + resultado2);
    alert(operacion[1]);
}

else if (elegirOperacion == "multiplicar") {
    console.log("el resultado de la multiplicacion es " + resultado3);
    alert(operacion[2]);
}

else {
    console.log("el resultado de la division es " + resultado4);
    alert(operacion[3]);
}

//ejercicio 2, operadores de javascript
let nombre1 = prompt("escribe tu nombre");
let edad = prompt("escribe tu edad");

alert("Hola " + nombre + ",tienes " + edad + " años.")

//ejercicio 3, concatenacion

let numero = prompt("escribe un numero para saber si es positivo, negativo o cero");
if (numero > 0) {
    console.log("el numero es positivo")

}
else if (numero < 0) {
    console.log("el numero es negativo")
}
else {
    console.log("el numero es cero")
}

// ejercicio 4, condicional con if

let edadUsuario = prompt("escribe tu edad")
if (edadUsuario >= 18) {
    alert("Eres mayor de edad")
}
else {
    alert("Eres menor de edad")
}

// ejercicio 5, combinacion de conceptos

let numero3 = prompt("escribe un numero para saber si es negativo o positivo");
if (numero3 > 0) {
    console.log("el numero es positivo")
}
else {
    console.log("el numero es negativo")
}

// ejercicio 6

let numero4 = prompt("escribe el primer numero para comparar si es mayor");
let numero5 = prompt("escribe el segundo numero");
let positivo1 = Number(numero4);
let negativo1 = Number(numero5)
if (numero4 > numero5) {
    console.log(numero4 + " es el numero mayor")
}
else {
    console.log(numero5 + " es el numero mayor")
}

//ejercicio 7

let numero6 = prompt("escribe un numero del 1 al 7");
let numero7 = Number(numero6);
let diaDeLaSemana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
if (numero6 == 1) {
    alert(diaDeLaSemana[1])
}
else if (numero6 == 2) {
    alert(diaDeLaSemana[2])
}
else if (numero6 == 3) {
    alert(diaDeLaSemana[3])
}
else if (numero6 == 4) {
    alert(diaDeLaSemana[4])
}
else if (numero6 == 5) {
    alert(diaDeLaSemana[5])
}
else if (numero6 == 6) {
    alert(diaDeLaSemana[6])
}
else {
    alert(diaDeLaSemana[7])
}
// ejercicio 8

let numero8 = prompt("escribe un numero para saber si es par o impar");
let numeroPar = numero8;

if (numero8 % 2 == 0) {
    console.log(parseInt(numero8) + " es un numero par")
}
else {
    console.log(parseInt(numero8) + " es un numero impar")
}

//ejercicio 9

let edadUsuario1 = prompt("escribe tu edad para poder votar");
let mayorDeEdad = parseInt(edadUsuario1);
if (edadUsuario1 >= 18) {
    alert("eres elegible para votar")
}
else {
    alert("No eres elegible para votar")
}
//ejercicio 10

let mesElegido = prompt("escribe un numero del 1 al 12 ,te dire el mes correspondiente");
let numeroDelMes = parseInt(mesElegido);
let meses = [0, "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
if (mesElegido == 1) {
    alert("elegiste el mes " + meses[1])
}
else if (mesElegido == 2) {
    alert("elegiste el mes " + meses[2])
}
else if (mesElegido == 3) {
    alert("elegiste el mes " + meses[3])
}
else if (mesElegido == 4) {
    alert("elegiste el mes " + meses[4])
}
else if (mesElegido == 5) {
    alert("elegiste el mes " + meses[5])
}
else if (mesElegido == 6) {
    alert("elegiste el mes " + meses[6])
}
else if (mesElegido == 7) {
    alert("elegiste el mes " + meses[7])
}
else if (mesElegido == 8) {
    alert("elegiste el mes " + meses[8])
}
else if (mesElegido == 9) {
    alert("elegiste el mes " + meses[9])
}
else if (mesElegido == 10) {
    alert("elegiste el mes " + meses[10])
}
else if (mesElegido == 11) {
    alert("elegiste el mes " + meses[11])
}
else {
    alert("elegiste el mes " + meses[12])
}
//ejercicio 11