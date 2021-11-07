const getSection = document.querySelector('#section');
const createBtn = document.createElement('button');
let createParagraph = document.createElement('p')
let countClick = 0


createButon = () => {
createBtn.innerText = 'Clique para contar'
getSection.appendChild(createBtn);
getSection.appendChild(createParagraph)

}
createButon();


count = () => {
  createBtn.addEventListener('click', () => {
    countClick = countClick + 1
    createParagraph.innerText = countClick
  });
};
count();





