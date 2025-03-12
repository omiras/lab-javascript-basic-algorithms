// Iteration 1: Names and Input
let driver = 'Arnau';
console.log(`[Iteration 1] The driver's name is ${driver}`);

let navigator = 'Rosa';
console.log(`[Iteration 1] The navigator's name is ${navigator}`);

// Iteration 2: Conditionals
if (driver.length > navigator.length) {
  console.log(`[Iteration 2] The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length < navigator.length) {
  console.log(`[Iteration 2] It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
} else {
  console.log(`[Iteration 2] Wow, you both have equally long names, ${driver.length} characters!`);
}

// Iteration 3: Loops
console.log(`[Iteration 3] Driver's name in uppercase:`);
for (var i = 0; i < driver.length; i++) {
  console.log(`[Iteration 3] ${driver[i].toUpperCase()}`);
}

console.log(`[Iteration 3] Navigator's name in reverse order:`);
for (var i = navigator.length - 1; i >= 0; i--) {
  console.log(`[Iteration 3] ${navigator[i]}`);
}

if (driver.localeCompare(navigator) === -1) {
  console.log(`[Iteration 3] The driver's name goes first.`);
} else if (driver.localeCompare(navigator) === 1) {
  console.log(`[Iteration 3] Yo, the navigator goes first definitely.`);
} else {
  console.log(`[Iteration 3] What?! You both have the same name?`);
}

// Bonus 1  
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet erat vitae purus dapibus aliquet. Sed sed dapibus nulla, nec cursus enim. Etiam interdum lacus vitae fringilla consequat. Suspendisse ultricies purus pretium dolor sollicitudin, non molestie velit blandit. Vivamus ac dui fermentum, accumsan augue malesuada, aliquam sapien. Nam consectetur justo id ex rutrum ullamcorper. Fusce vel arcu cursus, dictum massa et, congue felis. Vestibulum semper ultricies libero, eu cursus orci dictum et. Ut dictum, sapien mollis posuere pulvinar, magna nibh mollis magna, at euismod mauris nulla vitae neque. In hac habitasse platea dictumst. Maecenas rhoncus ex et varius facilisis. Duis a vestibulum lorem, dapibus pellentesque justo.

Curabitur nisl velit, tincidunt ac leo non, bibendum molestie mauris. Donec ex augue, elementum id pulvinar vulputate, ultricies et est. Sed semper est porttitor velit bibendum, ac semper dolor convallis. Praesent quis ultricies ex. Vestibulum porta vitae arcu ut laoreet. Curabitur tincidunt quis ipsum eget posuere. Sed porta finibus justo quis hendrerit. Aenean pretium lacinia eros, id congue libero commodo vel. Sed eros mauris, pharetra sit amet dictum venenatis, tempus a erat. Maecenas tempor quis nisi eget commodo. Suspendisse sit amet massa et libero dignissim fermentum. Etiam faucibus hendrerit ultricies. Sed accumsan odio quis lacus imperdiet, a vestibulum mauris fringilla. Maecenas vel sapien eu lacus consectetur porttitor non in tellus. Morbi vitae libero ultricies, ultrices enim nec, faucibus purus.

Cras dignissim tortor tempor, vestibulum lacus id, varius tellus. Morbi gravida sagittis mauris ac ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut massa eu enim fermentum lobortis in nec risus. Ut vehicula fermentum sodales. Pellentesque lacinia justo ullamcorper risus dapibus fermentum. Nulla vel scelerisque nisl, scelerisque congue odio. Mauris pellentesque varius congue. Praesent tortor massa, efficitur at diam at, venenatis pulvinar purus. Morbi fermentum nunc vitae orci molestie, ac laoreet mi faucibus. Pellentesque purus diam, dapibus ut magna sit amet, condimentum vulputate lacus. Aenean quis ligula tristique, pharetra orci vel, rhoncus sem. Pellentesque sed ante ac nulla hendrerit porta. Sed eu tempor leo.`;

let words = 1;
let et = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === ' ') {
    words++;
  }
  if (longText[i] === 'e' && longText[i + 1] === 't' && longText[i + 2] === ' ') {
    et++;
  }
}

console.log(`[Bonus 1] The text contains ${words} words.`);
console.log(`[Bonus 1] The text contains ${et} 'et'.`);

// Bonus 2
let phraseToCheck = "amor roma";

let phraseToCheckClean = phraseToCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let phraseToCheckReverse = phraseToCheckClean.split("").reverse().join("");

console.log(`[Bonus 2] We'll check if "${phraseToCheck}" is a palindrome!`);

if (phraseToCheckClean === phraseToCheckReverse) {
  console.log(`[Bonus 2] It's a palindrome!`);
} else {
  console.log(`[Bonus 2] It's not a palindrome.`);
}
