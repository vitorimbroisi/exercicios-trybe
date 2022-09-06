const fs = require('fs').promises;
const { join } = require('path');

const file = join(__dirname, '../data/users.data.json');

const read = async () => {
  const content = await fs.readFile(file, 'utf-8');
  return JSON.parse(content);
}

const save = (content) => {
  return fs.writeFile(file, JSON.stringify(content));
}

const insert = async (user) => {
  const users = await read();
  users.push(user);
  await save(users);
  
}

module.exports = {
  insert
}