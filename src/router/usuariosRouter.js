const express = require('express');

const usuariosController = require('../controllers/usuariosControllers');
const usuariosMiddleware = require('../middleware/usuariosMiddleware');
//const autenticacaoMiddleware = require('../middleware/autenticacao')

const userRouter = express.Router();

userRouter.get('/usuarios',usuariosController.getAll);
userRouter.post('/usuarios',usuariosMiddleware.validateFieldsUser, usuariosController.postCreate);
userRouter.post('/usuario/:id_usuario', usuariosController.postUpdate);
userRouter.delete('/usuario/:id_usuario', usuariosController.deleteUsuario);



module.exports = userRouter;