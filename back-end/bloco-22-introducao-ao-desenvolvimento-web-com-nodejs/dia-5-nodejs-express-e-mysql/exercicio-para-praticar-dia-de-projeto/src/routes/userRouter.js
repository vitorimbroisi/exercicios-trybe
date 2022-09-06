const express = require('express');
const emailValidation = require('../middleware/emailValidateion');
const userDb = require('../db/userDb')

const userRouter = express.Router();

userRouter.post('/register', emailValidation, async (req, res) => {
  const { username, email, password } = req.body
  await userDb.insert({ username, email, password })
  console.log('5- Depois do middleware nós seguimos com a requisição aqui no userRouter.js');
  res.status(200).json({ message: "ok" });
});

module.exports = userRouter;