const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const keys = Object.keys(lesson1);
// console.log(keys);

// for (let index = 0; index < keys.length; index++) {
//   console.log(lesson1[keys[index]]);
//   if ()
// }

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

addturno = (obj, turn, value) => {
obj[turn] = value;
}
addturno(lesson2, 'turno', 'noite')
// console.log(lesson2);

objkeys = (obj) => {
// console.log(Object.keys(obj));
}
objkeys(lesson1);

objWidth = (obj) => {
// console.log(Object.keys(obj).length);
};
objWidth(lesson3);

objValue = (obj) => {
// console.log(Object.values(obj));
};
objValue(lesson1);

const allLessons = {

};

Object.assign(allLessons, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const students1 = allLessons.lesson1.numeroEstudantes;
const students2 = allLessons.lesson2.numeroEstudantes;
const students3 = allLessons.lesson3.numeroEstudantes;

totalStudents = () => {
// console.log(students1 + students2 + students3);
};
totalStudents();

checkObj = (obj, key, value) => {
  const array = Object.entries(obj);
  // console.log(array);
  for (const index in array) {
      if (array[index][0] === key && array[index][1] === value) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  };
checkObj(lesson3, 'turno', 'noite');
