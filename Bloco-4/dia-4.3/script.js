// let number = 5;
// let string = '';

// 1- imprima como abaixo:
// n = 5
// *****
// *****
// *****
// *****
// *****

// for (let index = 0; index < number; index += 1) {
//   string = string + '*' 
// }
// for (let index = 0; index < number; index++) {
//   console.log(string);
// }

// ----------------------------

// 2- imprima como abaixo:
// n = 5
// *
// **
// ***
// ****
// *****

// ---------------------------------------------

// for (let index = 0; index < number; index += 1) {
//   string = string + '*' 
//   console.log(string);
// }

// -----------------------------------------

// 3-imprima como abaixo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****


let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};