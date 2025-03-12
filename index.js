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

let longText = "Praesent et pharetra in nibh ut feugiat. Nulla sit amet malesuada urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis magna non nisl malesuada semper id sit amet lorem. Mauris blandit enim ut posuere placerat. Donec id massa erat. Nam arcu mi, euismod vel mattis in, convallis eget odio. Nullam sem nisi, sollicitudin et neque eget, porttitor tempor leo. Nam ut mi nec lacus euismod laoreet non vitae magna. Curabitur in condimentum neque. Aliquam non dui faucibus arcu vulputate venenatis vitae vel quam. Integer placerat dapibus odio, id consequat est interdum nec.";

// Necesitamos guardar en algún sitio el número de palabras. Inicialmente es 0
let numWords = 0;

// Guardamos las veces que aparece la palabra et
let numEt = 0;

// Recorremos el string. Cada vez que encontramos un espacio en blanco podemos considerar que hay una palabra nueva
for (let i=0; i<longText.length; i++) {
    if (longText[i]==" "){
        numWords++;
        // Esto tiene su cosa. Con el método slice "cortamos" la el string longText tres posiciones por detras del espacio encontrado hasta la siguiente posición de espacio en blanco. Si el substring resultante es " et " entonces hemos encontrado la palabra "et" e incrementamos la variable numEt 
        // https://oscarm.tinytake.com/media/173b71b?filename=1741810648874_TinyTake12-03-2025-09-15-51_638774074476298658.png&sub_type=thumbnail_preview&type=attachment&width=1196&height=216
        if (longText.slice(i - 3, i + 1) == " et ") {
            numEt++;
        }
    }
}

console.log("[BONUS 1]: Número total de palabras: ", numWords);
console.log("[BONUS 1]: Número total de palabras 'et' : ", numEt);


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

