const express = require('express');

const turmasController = require('../controllers/turmasController');
const turmasMiddleware = require('../middleware/turmasMiddleware');

const userRouter = express.Router();

userRouter.get('/turmas', turmasController.getAll);
userRouter.post('/turmas', turmasMiddleware.validateFieldsTurma, turmasController.postCreate);
userRouter.post('/turma/:id_turma', turmasController.postUpdate);
userRouter.delete('/turma/:id_turma', turmasController.deleteTurma);

module.exports = userRouter;