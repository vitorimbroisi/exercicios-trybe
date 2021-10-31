const estados = [
'AC',
'AL',
'CE',
'MA',
'MT',
'MS',
'PE',
'RJ',
'RN',
'RS',
'RO',
'RR',
'SC',
'SP',
'SE',
'TO',
];

function addStates() {
  const getEstado = document.querySelector('#estado');
  
  for (let index = 0; index < estados.length; index++) {
    const createOption = document.createElement('option');
    createOption.innerText = estados[index]
    getEstado.appendChild(createOption);
  }
}
addStates()
