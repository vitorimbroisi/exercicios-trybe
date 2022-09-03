const express = require('express');
const peopleDb = require('../db/peopleDb')

const peopleRouter = express.Router();

peopleRouter.post('/persons', async (req, res) => {
  try {
  // const { email, firstName, lastName, phone } = req.body;

  const person = req.body;

  const [result] = await peopleDb.insert(person);


  return res.status(201).json({ insertedId: result.insertId });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Erro Interno" })
  }
});

peopleRouter.get('/persons', async (req, res) => {
  try {
    // o persons deve ser desestruturado pois o banco responde com um array que contem outras informações vindas do banco
    // e a unica informação que queremos é o persons.
    const [persons] = await peopleDb.list();

    return res.status(200).json(persons);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Erro interno" })
  } 
});

module.exports = peopleRouter;
