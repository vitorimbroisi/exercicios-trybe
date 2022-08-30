// src/app.js
const express = require('express');
const validateTeam = require('./middlewares/validateTeam');

const app = express();
app.use(express.json());

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
  ];

// app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((t) => t.id === id)) {
    // se existe, a requisição segue para o próximo middleware
    return next();
  }

  // se não existe, então vamos retornar o status HTTP 404
  res.sendStatus(404);
};

app.get('/teams', (req, res) => {
    res.status(200).json({ teams })
});


app.get("/teams/:id", existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

// app.get('/teams/:id', (req, res) => {
//   const team = teams.find(({ id }) => id === Number(req.params.id));
//   res.status(200).json(team);
// });

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
  
    res.status(201).json({ team: newTeam });
  });

  // app.put('/teams/:id', (req, res) => {
  //   const { id } = req.params;
  //   const { name, initials } = req.body;
  //   let updatedTeam;
  
  //   for (let i = 0; i < teams.length; i += 1) {
  //     const team = teams[i];
  
  //     if (team.id === Number(id)) {
  //       team.name = name;
  //       team.initials = initials;
  //       updatedTeam = team;
  //     }
  //   }
  
  //   res.status(200).json({ updatedTeam });
  // });
 
  // app.delete('/teams/:id', (req, res) => {
  //   const { id } = req.params;
  //   const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  //   teams.splice(arrayPosition, 1);
  
  //   res.status(200).end();
  // });

  app.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    // não precisamos mais conferir, com certeza o team existe
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  });
  
  app.delete('/teams/:id', (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);
    res.sendStatus(200);
  });
  
module.exports = app;