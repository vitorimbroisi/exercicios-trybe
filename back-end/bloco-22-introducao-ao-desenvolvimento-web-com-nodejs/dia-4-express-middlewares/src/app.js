const express = require('express');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validCreateAt = require('../middlewares/validateCreateAt');
const validRating = require('../middlewares/validRating');
const validDifficulty = require('../middlewares/validDifficulty');

const app = express();
app.use(express.json());

const myActivities = []

app.get('/activities', (_req, res) => {
    res.status(200).json({ myActivities })
  });

app.post('/activities', 
validateName, 
validatePrice, 
validateDescription, 
validCreateAt, 
validRating,
validDifficulty, 
(req, res) => {
  const newActiviti = { ...req.body };
  myActivities.push(newActiviti);
    return res.status(201).json({ message: 'Atividade registrada com sucesso!'})
});

module.exports = app;

