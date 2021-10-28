function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
const ulDays = document.getElementById('days');

function createDaysOfMonth() {

for (let index = 0; index < dezDaysList.length; index +=1) {
  let days = dezDaysList[index];

  const dayList = document.createElement('li');
  
  if (days === 24 | days === 31) {
    dayList.className = 'day holiday';
    dayList.innerText = days
  } else if (days === 4 | days === 11 || days === 18 ) {
    dayList.className = 'day friday'
    dayList.innerText = days
  } else if (days === 25) {
    dayList.className = 'day holiday friday';
    dayList.innerText = days;
  } else {
    dayList.className = 'day'
    dayList.innerText = days
  }

  ulDays.appendChild(dayList) ;
}

}
createDaysOfMonth()

function createButton () {
  const btnContainer = document.getElementsByClassName('buttons-container')[0];
  const btn = document.createElement('button');
  btn.id = 'btn-holiday'
  btn.innerText = 'Feriados'

  btnContainer.appendChild(btn)

}
createButton ()

function selectHoliday () {
  const clickBtn = document.querySelector('#btn-holiday');
  const holiday = document.querySelectorAll('.holiday');
  
  clickBtn.addEventListener('click', function () {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === 'red') { 
        holiday[index].style.backgroundColor = 'rgb(238,238,238)'
      } else {
        holiday[index].style.backgroundColor = 'red'
      } 
    }
  })
};
selectHoliday();

function btnFriday() {
  const getDivBtnContainer = document.querySelector('.buttons-container');
  
  const createBtn = document.createElement('button');
  createBtn.id = 'btn-friday'
  createBtn.innerText = 'Sexta-feira'

  getDivBtnContainer.appendChild(createBtn)

}
btnFriday();

function clickBtnFriday() {
  const getBtnFriday = document.querySelector('#btn-friday');
  
  getBtnFriday.addEventListener('click', function() {
    const getFridayDays = document.querySelectorAll('.friday');
    
    for (let index = 0; index < getFridayDays.length; index += 1) {
      if (getFridayDays[index].innerText !== 'Sextou!') {
      getFridayDays[index].innerText = 'Sextou!'
      } else {
        const arrayDays = [4, 11, 18, 25];
        getFridayDays[index].innerText = arrayDays[index];
      }
    }
  })
}
clickBtnFriday();

function zoomDay() {
  const getDays = document.querySelector('#days');
  
  getDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px'
  })

  getDays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px'
  })
}
zoomDay();


function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');


function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();