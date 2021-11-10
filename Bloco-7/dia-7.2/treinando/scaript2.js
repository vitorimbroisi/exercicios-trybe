const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

concatObj = (object, key, value) => {
  object[key] = value;
  // console.log(customer);
}

concatObj(customer, 'city', 'Rio de Janeiro')

for (const key in customer) {
  console.log(key);
  // console.log(`${key}: ${customer[key]}`);
  }

  console.log(Object.keys(customer));
  console.log(Object.values(customer));
