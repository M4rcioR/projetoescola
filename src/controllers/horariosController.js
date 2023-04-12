const horariosModel = require('../models/horariosModel');

const getAll = async (req, res) => {

    const horarios = await horariosModel.getAll();

    return res.status(200).json(horarios);
};

const postCreate = async (req, res) => {

    const horario = await horariosModel.postCreate(req.body);

    return res.status(201).json(horario);
};

const postUpdate = async (req, res) => {

    const id = req.params.id_horario;

    const horario = await horariosModel.postUpdate(id, req.body);

    return res.status(200).json({
        "messagem": "Dados editados com sucesso",
        "code": 200
    });
};

const deleteHorario = async (req, res) => {

    const id = req.params.id_horario;

    await horariosModel.deleteHorario(id);

    return res.status(200).json({
        "messagem": "Dados excluidos com sucesso",
        "code": 200
    });
};

module.exports = {
    getAll,
    postCreate,
    postUpdate,
    deleteHorario
};
