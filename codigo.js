let nombre = prompt("decime tu nombre")
alert("bienvenido " + nombre)

//ejercicio 1, pedir datos con prompt


let numero1 = prompt("escribe un numero");
let elegirOperacion = prompt("escribe la operacion que quieres hacer: sumar, restar, multiplicar,dividir");

let numero2 = prompt("escribe un numero");
let operacion = ["sumaste", "restaste", "multiplicaste", "dividiste"]
let resultado1 = Number(numero1) + Number(numero2);
let resultado2 = Number(numero1) - Number(numero2);
let resultado3 = Number(numero1) * Number(numero2);
let resultado4 = Number(numero1) / Number(numero2);



if (elegirOperacion = "sumar") {
    console.log("el resultado de la suma es " + resultado1);
    alert(operacion[0]);
}
else if (elegirOperacion = "restar") {
    console.log("el resultado de la resta es " + resultado2);
    alert(operacion[1]);
}

else if (elegirOperacion = "multiplicar") {
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

let numero = prompt("escribe un numero");
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






