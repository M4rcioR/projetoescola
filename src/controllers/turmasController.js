const turmasModel = require('../models/turmasModel');

const getAll = async (req, res) => {

    const turmas = await turmasModel.getAll();

    return res.status(200).json(turmas);
};

const postCreate = async (req, res) => {

    const turma = await turmasModel.postCreate(req.body);

    return res.status(201).json(turma);
};

const postUpdate = async (req, res) => {

    const id = req.params.id_turma;

    const turma = await turmasModel.postUpdate(id, req.body);

    return res.status(200).json({
        "messagem": "Dados editados com sucesso",
        "code": 200
    });
};

const deleteTurma = async (req, res) => {

    const id = req.params.id_turma;

    await turmasModel.deleteTurma(id);

    return res.status(200).json({
        "messagem": "Dados excluidos com sucesso",
        "code": 200
    });
};

module.exports = {
    getAll,
    postCreate,
    postUpdate,
    deleteTurma
};