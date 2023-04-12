const express = require('express');

const horariosController = require('../controllers/horariosController');
const horariosMiddleware = require('../middleware/horariosMiddleware');

const userRouter = express.Router();

userRouter.get('/horarios', horariosController.getAll);
userRouter.post('/horarios', horariosMiddleware.validateFieldsHorario, horariosController.postCreate);
userRouter.post('/horario/:id_horario', horariosController.postUpdate);
userRouter.delete('/horario/:id_horario', horariosController.deleteHorario);

module.exports = userRouter;