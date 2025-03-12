// Iteration 1

let driver = "Alex";
let navigator = "Denisse";

console.log(`[Iteration 1]: The driver's name is ${driver}`);
console.log(`[Iteration 1]: The navigators's name is ${navigator}`);

// Iteration 2
if (driver.length>navigator.length) {
    console.log(`[Iteration 2]: The driver has the longest name, it has ${driver.length} characters.`);

} else if (driver.length<navigator.length) {
    console.log(`[Iteration 2]: The navigator has the longest name, it has ${navigator.length} characters.`);
} else {
    console.log(`[Iteration 2]: Wow, you both have equally long names, ${driver.length} characters!`);   
}

// Iteration 3
let driverUppercase = "";

for (let i=0; i<driver.length; i++) {
    driverUppercase = driverUppercase + driver[i].toUpperCase() + " ";
}

console.log(`[Iteration 3.1]: ${driverUppercase}`);

let reversedNavigator = ""; 
for (let i=navigator.length-1; i>=0; i--) {
    reversedNavigator += navigator[i];
}

console.log(`[Iteration 3.2]: ${reversedNavigator}`);

// Iteration 3.3
// https://chatgpt.com/share/67d1ddf6-c84c-8002-9d7f-2128e13940f3

if (driver < navigator) {
    console.log("[Iteration 3.3]: ", "The driver's name goes first.");
} else if (driver > navigator) {
    console.log("[Iteration 3.3]: ", "Yo, the navigator goes first, definitely.");
} else {
    console.log("[Iteration 3.3]: ", "What?! You both have the same name?");

}

// BONUS 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Necesitamos guardar en algún sitio el número de palabras. Inicialmente es 0
let numWords = 0;

// Recorremos el string. Cada vez que encontramos un espacio en blanco podemos considerar que hay una palabra nueva
for (let i=0; i<longText.length; i++) {
    if (longText[i]==" "){
        numWords++;
    }
}

console.log("[BONUS 1]: Número total de palabras: ", numWords);

// BONUS 2

/**
 * Un palindromo se lee igual de principio al fin que de fin al principio de la palabra 
 */
let phraseToCheck ="salas";
let palabraAlReves = "";

/** Creamos la misma palabra pero escrita al revés y la guardamos en palabraAlReves. Para ello recorremos el string empezando por el último índice  */
for (let i=phraseToCheck.length-1;i>=0;i--) {
    palabraAlReves = palabraAlReves + phraseToCheck[i];
}

/** Para saber si la palabra candidata es un palíndromo, tan solo tenemos que ver si los dos strings son iguales */
if (palabraAlReves == phraseToCheck) {
    console.log("[Iteration Bonus 2]: ", `${phraseToCheck} es un palíndromo.` );
} else {
    console.log("[Iteration Bonus 2]: ", `${phraseToCheck} NO es un palíndromo.` );

}

