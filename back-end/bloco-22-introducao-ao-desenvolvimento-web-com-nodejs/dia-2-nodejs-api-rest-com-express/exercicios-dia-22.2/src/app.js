// src/app.js
const express = require('express');

const app = express();
app.use(express.json());

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];

  app.get('/myActivities', (_req, res) => {
    res.status(200).json({ activities })
  });

  app.get('/myActivities/:id', (req, res) => {
    // da para fazer das duas formas abaixo
    // const active = activities.find(({ id }) => id === Number(req.params.id));
    const active = activities.find( active => active.id === Number(req.params.id));
    res.status(200).json(active);
  });

  app.get('/filter/myActivities', (req, res) => {
    const { status } = req.query;
    let filteredActivities = activities;
  
    if (status) {
      filteredActivities = activities.filter((activity) => activity.status === status);
    }
  
    res.status(200).json({ activities: filteredActivities });
  });

module.exports = app;