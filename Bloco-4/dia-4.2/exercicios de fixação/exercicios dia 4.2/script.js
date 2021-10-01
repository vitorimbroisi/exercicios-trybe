let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let somatorio = 0

// for (let index = 0; index < numbers.length; index += 1) {
//   somatorio = somatorio + numbers[index]
// }
// console.log(somatorio);

// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// for (let index = 0; index < numbers.length; index += 1) {
//   somatorio = somatorio + numbers[index]
// }
// console.log(somatorio/numbers.length);

// 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// for (let index = 0; index < numbers.length; index += 1) {
//   somatorio = somatorio + numbers[index]
// }
// let media = somatorio /numbers.length

// if (media > 20) {
//   console.log('valor maior que 20');
// } else {
//   console.log('valor menor que 20');
// }

// 5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let highNumber = 0

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > highNumber) {
//     highNumber = numbers[index]
//   }
// }
// console.log(highNumber);

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let oddNumbers = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     oddNumbers += 1
//   } 
// }

// if (oddNumbers === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(oddNumbers);
// }

// console.log(oddNumbers);

// 7- Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let lowerValue = numbers[0];

// for (let index = 0; index < numbers.length; index +=1) {
//   if (lowerValue > numbers[index]) {
//     lowerValue = numbers[index]
//   }
// }
// console.log(lowerValue);

// 8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let arrayNumbers = [];

for (let index = 0; index < 26; index += 1) {
  arrayNumbers.push(index)
}
console.log(arrayNumbers);

let sum = 0;

for (let index = 0; index < arrayNumbers.length; index += 1) {
  sum = sum + arrayNumbers[index]
}
console.log(sum);

// 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let index = 0; index < arrayNumbers.length; index +=1) {
  console.log(arrayNumbers[index] / 2);
}


