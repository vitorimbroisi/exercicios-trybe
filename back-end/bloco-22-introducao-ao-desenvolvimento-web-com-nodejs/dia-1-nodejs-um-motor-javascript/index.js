const calcIMC = require('./imc')
const readline = require('readline-sync')

const peso = readline.questionInt('Digite seu peso: ')
const altura = readline.questionInt('Digite sua altura em centinmetros: ')

calcIMC.imc(peso, altura/100);
