// // Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const a = 8;
// const b = 3;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// //

// // Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const d = 30;
// const e = 50;
// const f = 10;

// if (d > e && d > f) {
//   console.log(d);
// } else if (e > d && e > f) {
//   console.log(e);
// } else {
//   console.log(f);
// }

// //

// // Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const number = 0;

// if (number > 0) {
//   console.log('positivo')
// } else if (number < 0) {
//   console.log('negative')
// } else {
//   console.log('zero');
// }

// // Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const angle1 = 70;
// const angle2 = 90;
// const angle3 = -20;

// if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
//   console.log('angulo inálido');
// } else if ((angle1 + angle2 + angle3) === 180) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// //

// // Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// const piece = 'dama';

// switch (piece) {
//   case 'cavalo':
//     console.log('anda em L');
//     break;
//   case 'bispo':
//     console.log('anda na diagonal');
//     break;
//   case 'torre':
//     console.log('anda em linha reta');
//     break
//   case 'peão':
//     console.log('anda uma casa para frente');
//     break;
//   case 'rei':
//     console.log('anda uma casa para qualquer direção');
//     break;
//   case 'dama':
//     console.log('anda quantas casas quiser para qualquer direção');
//     break
//   default:
//     console.log('peça não cadastrada');
// }

//

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:



// const grade = 76;

// if (grade < 0 || grade > 100) {
//   console.log("Erro, nota incorreta!");
// } else if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 60) {
//   console.log("D");
// } else if (grade >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

// const a = 3;
// const b = 5;
// const c = 9;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// const a = 2;
// const b = 4;
// const c = 6;

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// const productCost = 50;
// const sellCost = 90;

// const productTotalCost = (productCost * 0.2) + productCost;
// // console.log(productTotalCost);

// if ( productCost < 0 || sellCost < 0) {
//   console.log('erro');
// } else {
//   console.log((sellCost - productTotalCost) * 1000);
// }

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const salario = 8000;
let salarioMenosInss;
let salarioLiquido;

if (salario <= 1556.94) {
  salarioMenosInss = salario * 0.92;
  // console.log(salarioMenosInss);
} else if (salario >= 1556.95 && salario <= 2594.92) {
  salarioMenosInss = salario * 0.91;
  // console.log(salarioMenosInss);
} else if (salario >= 2594.93 && salario <= 5189.82) {
  salarioMenosInss = salario * 0.89;
  // console.log(salarioMenosInss);
} else {
  salarioMenosInss = salario - 570.88
  // console.log(salarioMenosInss);
}

if (salarioMenosInss <= 1903.98) {
  salarioLiquido = salarioMenosInss;
  console.log(salarioLiquido);
} else if (salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65) {
  salarioLiquido = (salarioMenosInss - ((salarioMenosInss * 0.075) - 142.80))
  console.log(salarioLiquido);
} else if (salarioMenosInss >= 2826.66 && salarioMenosInss <= 3751.05) {
  salarioLiquido = (salarioMenosInss - ((salarioMenosInss * 0.15) - 354.80))
  console.log(salarioLiquido);
} else if (salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68) {
  salarioLiquido = (salarioMenosInss - ((salarioMenosInss * 0.225) - 636.13))
  console.log(salarioLiquido);
} else {
  salarioLiquido = (salarioMenosInss - ((salarioMenosInss * 0.275) - 869.36))
  console.log(salarioLiquido);
}


