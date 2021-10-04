document.getElementsByTagName('p')[0].innerText = 'Vou voar alto'

document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)'

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white'

document.querySelector('.title').innerHTML = 'Exercicio de javascript'

let p = document.getElementsByTagName('p')[0]
p.innerHTML = p.innerHTML.toUpperCase()

let paragraphs = document.querySelectorAll('p');

function showParagraph () {
  for (let index = 0; index < paragraphs.length; index++) {
    console.log(paragraphs[index].innerText);;
  }
}
showParagraph()