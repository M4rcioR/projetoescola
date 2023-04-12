const usuariosModel = require('../models/usuariosModel');

const getAll = async (req, res) => {

    const usuarios = await usuariosModel.getAll();

    return res.status(200).json(usuarios);

};

const postCreate = async (req, res) => {

    const usuario = await usuariosModel.postCreate(req.body);

    return res.status(201).json(usuario);
};

const postUpdate = async (req, res) => {

    const id = req.params.id_usuario;

    const usuario = await usuariosModel.postUpdate(id, req.body);

    return res.status(200).json({
        "messagem": "Dados editados com sucesso",
        "code": 200
    });

};

const deleteUsuario = async (req, res) => {

    const id = req.params.id_usuario;

    await usuariosModel.deleteUsuario(id);

    return res.status(200).json({
        "messagem": "Dados excluidos com sucesso",
        "code": 200
    });
}

module.exports = {
    getAll,
    postCreate,
    postUpdate,
    deleteUsuario,
};