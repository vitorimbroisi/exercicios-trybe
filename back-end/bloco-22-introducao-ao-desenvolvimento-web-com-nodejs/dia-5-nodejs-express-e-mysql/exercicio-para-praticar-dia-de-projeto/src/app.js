const express = require('express');
const userRouter = require('./routes/userRouter')

const app = express();
app.use(express.json());
//colocando o "user" aqui a rota inicial será user não "/"
app.use('/user', userRouter)
console.log('1- Aqui é o app.js, Onde tudo começa!');

module.exports = app;