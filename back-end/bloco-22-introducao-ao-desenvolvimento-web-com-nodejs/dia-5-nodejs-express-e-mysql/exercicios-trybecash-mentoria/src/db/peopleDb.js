const connection = require('./connection');

const insert = (person) => connection.execute(
  `INSERT INTO people 
    (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
  [person.firstName, person.lastName, person.email, person.phone],
);

const list = () => connection.execute(
  `SELECT * FROM people`
);

module.exports = { insert, list };