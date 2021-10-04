document.getElementsByTagName('h1')[0].style.backgroundColor = 'rgb(0, 176, 105)';



const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';


const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';


const emergency = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergency.length; index += 1) {
  emergency[index].style.backgroundColor = 'rgb(165, 0, 243'
}

const noEmercy = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmercy.length; index +=1 ) {
  noEmercy[index].style.backgroundColor =  'rgb(35, 37, 37)'
  
}

document.getElementById('footer-container').style.backgroundColor = 'rgb(0, 53, 51)'