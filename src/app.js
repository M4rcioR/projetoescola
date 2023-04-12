const express = require('express');
const userRouter = require('./router/usuariosRouter');
const usuariosRouter = require('./router/usuariosRouter');
const cursosRouter = require('./router/cursosRouter');
const turmasRouter = require('./router/turmasRouter');
const horariosRouter = require('./router/horariosRouter');



const app = express();

app.use(express.json());
app.use(userRouter);
app.use(usuariosRouter);
app.use(cursosRouter);
app.use(turmasRouter);
app.use(horariosRouter);


module.exports = app;