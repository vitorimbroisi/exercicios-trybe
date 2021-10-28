
const getBody = document.getElementsByTagName('body')[0];
const getSection = document.querySelector('.section');
const getParagraph = document.querySelector('.paragraph');
getParagraph.style.fontSize = '17px'
getParagraph.style.fontFamily = 'arial'

function temeColor () {
  const createBtn = document.createElement('button');

  createBtn.className = 'btn'
  createBtn.innerText = 'teme'

  getSection.appendChild(createBtn)

  createBtn.addEventListener('click', function() {
    if (getBody.style.backgroundColor !== 'gray') { 
    getBody.style.backgroundColor = 'gray'
    localStorage.setItem('teme', 'dark')
    } else {
    getBody.style.backgroundColor = 'white'
    localStorage.setItem('teme', 'white')
    }
  });

}
temeColor();

function textColor() {
  const btnTextColor = document.createElement('button');
  getSection.appendChild(btnTextColor);
  btnTextColor.innerText = 'text color'

  btnTextColor.addEventListener('click', function() {
    if (getParagraph.style.color !== 'white') {
      getParagraph.style.color = 'white'
      localStorage.setItem('textColor', 'white')
    } else {
      getParagraph.style.color = 'black'
      localStorage.setItem('textColor', 'black')
    }
  })
}
textColor();

function textSize() {
  const createBtnTextSize = document.createElement('button');
  createBtnTextSize.innerText = 'text size'
  getSection.appendChild(createBtnTextSize)

  createBtnTextSize.addEventListener('click', function() {
    if (getParagraph.style.fontSize !== '17px') {
      getParagraph.style.fontSize = '17px'
      localStorage.setItem('fontSize', 'small');
    } else {
      getParagraph.style.fontSize = '25px';
      localStorage.setItem('fontSize', 'big');
    }
  })
};
textSize();

function fontType() {
  const createBtnFontType = document.createElement('button');
  getSection.appendChild(createBtnFontType);
  createBtnFontType.innerText = 'font type'

  createBtnFontType.addEventListener('click', function() {
    if (getParagraph.style.fontFamily !== 'arial') {
      getParagraph.style.fontFamily = 'arial';
      localStorage.setItem('fontType', 'arial');
    } else {
      getParagraph.style.fontFamily = 'mono space'
      localStorage.setItem('fontType', 'mono space')
    }
  })
}
fontType();
