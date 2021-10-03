// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function palindrome (palavra) {
//   if (palavra === palavra.split('').reverse().join('') ) {
//     return true
//   } else {
//     return false
//   }
// }


// console.log(palindrome('vitor'));
// console.log(palindrome('arara'));


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function higherNumber (array) {
//   let number = 0;
//   for (let number1 of array) {
//     if (number1 > number) {
//       number = number1
//     }
//   }
//   return number
// }

// console.log(higherNumber([1, 2, 3, 4, 5]));

// 3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function lowerNumber (array) {
//   number = array[0];
//   for (let number1 of array) {
//     if (number1 < number) {
//       number = number1
//     }
//   }
//   return number;
// }
// console.log(lowerNumber([10, 2, 3, 4, 5]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


// function countName (array) {
//   let namesArray = names[0].length;
//   let highName = '';
//   for (let name of array) {
//     if (namesArray < name.length) {
//       highName = name
//       namesArray = name.length
//     }
//   } 
//   return highName;
// }
// console.log(countName(names));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.




// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

// let number = 4;
// let sum = 0;

// for (let index = 0; index <= number; index++) {
//   sum = sum + index
// }
// console.log(sum);


