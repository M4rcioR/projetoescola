const express = require('express');

const cursosController = require('../controllers/cursosController');
const cursosMiddleware = require('../middleware/cursosMiddleware');

const userRouter = express.Router();

userRouter.get('/cursos', cursosController.getAll);
userRouter.post('/cursos', cursosMiddleware.validateFieldsCurso, cursosController.postCreate);
userRouter.post('/curso/:id_curso', cursosController.postUpdate);
userRouter.delete('/curso/:id_curso', cursosController.deleteCurso);

module.exports = userRouter;
