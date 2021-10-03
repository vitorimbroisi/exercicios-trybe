let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem vinda ' + info.personagem);

info.recorrente = 'sim'

// console.log(info);

// for (let index in info) {
//   console.log(index);
// }

// for (let index in info) {
//   console.log(info[index]);
// }

let info2 = {
  personagem: 'Tio patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente : 'sim'
};

for (let index in info, info2) {
  console.log(info[index] + ' e ' + info2[index]);
}