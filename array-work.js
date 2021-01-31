/* const ferenheit = [23, 140, 212, 41];
function getCelcius() {
  let celciusArray = ferenheit.map(
    (temperatyre) => ((temperatyre - 32) * 5) / 9
  );
  console.log(celciusArray);
}
getCelcius(); */

/* const array = [11, NaN, [], "Angels"];
function chceckForFolsey() {
  return array.some((item) => !item);
}
console.log(chceckForFolsey()); */

/* const array = ["Rabbit", "Football", "Cracking"];
function getTotal() {
  return array.reduce((total, word) => total + word.length, 0);
}

console.log(getTotal()); */

/* const numbers = [9, 16, 81];
function checkSquares() {
  return numbers.every((value) => Math.sqrt(value) % 1 === 0);
}

console.log(checkSquares());
 */

/* const wordsArray = ["Florida", "dog", "phone"];
const number = 5;

function getWords() {
  return wordsArray.filter((word) => word.length >= number);
}

console.log(getWords()); */

/* const array = ["23cm", "5.6cm", "1000cm"];
function getValues() {
  return array.map((toNum) => parseFloat(toNum));
}

console.log(getValues()); */

/* const saying = "In West Philadelphia, born and raised";
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function getVowelCount() {
  return saying.split("").filter((letter) => vowels.includes(letter)).length;
}
console.log(getVowelCount()); */

const title = "the queens gambit";
function capitalise() {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
    .join(" ");
}
console.log(capitalise());
