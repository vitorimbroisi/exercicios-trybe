// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastname = 'Faria'

// console.log(customer1);

// customer1['city'] = 'Rio de Janeiro'

// console.log(customer1);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
console.log(customer);
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);