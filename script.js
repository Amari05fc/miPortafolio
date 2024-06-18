/*Archivo de JS que contiene un script (conjunto de lineas de cogido que buscan realizar alguna accion es epecifico) */


/*
Entrada y salida con JS
Salida: alert
alert("Hola que tal")

Entrada: prompt

Salida: console.log

Entrada y salida: documents
*/

/*Variables

constantes: const
variables: let

*/
/*
const PI = 3.1416;
let radio = 0;

radio = prompt("Que radio tiene tu circulo?");

console.log(PI);
console.log(radio);
console.log(PI*radio);


*/
let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Soy Fernanda Cruz Hernández')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Soy Desarrolladora Frontend JR')
    .pauseFor(2500)
    .start();