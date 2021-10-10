// 1-Acesse o elemento elementoOndeVoceEsta .
// 2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// 3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// 4-Acesse o primeiroFilho a partir de pai .
// 5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// 6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// 7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// 8-Agora acesse o terceiroFilho a partir de pai .

// --------------------------------------
// parentNode : retorna o nó pai.
// parentElement : retorna o elemento pai.
// childNodes : retorna um NodeList com todos os nós filhos.
// children : retorna um HTMLCollection com todos os elementos filhos.
// firstChild : retorna o primeiro nó filho.
// firstElementChild : retorna o primeiro elemento filho.
// lastChild : retorna o último nó filho.
// lastElementChild : retorna o último elemento filho.
// nextSibling : retorna o próximo nó.
// nextElementSibling : retorna o próximo elemento.
// previousSibling : retorna o nó anterior.
// previousElementSibling : retorna o elemento anterior.

// ==============================================

// Crie um irmão para elementoOndeVoceEsta .
// Crie um filho para elementoOndeVoceEsta .
// Crie um filho para primeiroFilhoDoFilho .
// A partir desse filho criado, acesse terceiroFilho .

// console.log(document.getElementById('elementoOndeVoceEsta').parentElement);
// document.getElementById('elementoOndeVoceEsta').parentElement.style.backgroundColor = 'blue'

// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// primeiroFilhoDoFilho.innerText = 'oi';

// const pai = document.getElementById('pai');
// console.log(pai.firstElementChild);

// const elementoOndeVoceEsta2 = document.getElementById('elementoOndeVoceEsta');
// console.log(elementoOndeVoceEsta2.previousElementSibling);

// const elementoOndeVoceEsta3 = document.getElementById('elementoOndeVoceEsta');
// console.log(elementoOndeVoceEsta3.nextSibling);


// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// document.getElementById('pai').children
// console.log(document.getElementById('pai').children[2]);

// let createParagraph = document.createElement('p');
// createParagraph.innerText = 'vamos la brincar?'
// document.getElementById('elementoOndeVoceEsta').appendChild(createParagraph);

// 1- Crie um irmão para elementoOndeVoceEsta .
// 2- Crie um filho para elementoOndeVoceEsta .
// 3- Crie um filho para primeiroFilhoDoFilho .
// 4- A partir desse filho criado, acesse terceiroFilho .

// 1-
// const pai = document.getElementById('pai');
// const createElement = document.createElement('p');

// pai.appendChild(createElement)

// 2-
// const elementoOndeVoceEsta1 = document.getElementById('elementoOndeVoceEsta');
// const createElement = document.createElement('ul');
// elementoOndeVoceEsta1.appendChild(createElement)

// 3-
// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// const createElement1 = document.createElement('p');
// primeiroFilhoDoFilho.appendChild(createElement1)

// 4-

// const terceiroFilho = createElement1.parentElement.parentElement.nextElementSibling
// const terceiroFilho = document.getElementsByTagName('p')[0].parentElement.parentElement.nextElementSibling
// console.log(terceiroFilho);

// -----------------------------------

// 5- Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

// const paiDoPai = document.getElementById('paiDoPai');
const terceiroFilho = document.getElementById('terceiroFilho')
terceiroFilho.remove();