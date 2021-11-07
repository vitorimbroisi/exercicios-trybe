// fatorial = (number) => {
//   let result = 1;
//   for (let index = 1; index < number + 1; index += 1) {
//     result = result * index
//   }
//   console.log(result);
// }

// fatorial(10);


countWords = (frase) => {
const splitWord = frase.split(' ');
let biggestWord = '';
  for (const words of splitWord) {
    if (biggestWord.length < words.length){
    biggestWord = words
    }
  }
  console.log(biggestWord);
}
countWords('vamos brincar hoje?')