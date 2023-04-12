const cursosModel = require('../models/cursosModel');

const getAll = async (req, res) => {

    const cursos = await cursosModel.getAll();

    return res.status(200).json(cursos);
};

const postCreate = async (req, res) => {

    const curso = await cursosModel.postCreate(req.body);

    return res.status(201).json(curso);
};

const postUpdate = async (req, res) => {

    const id = req.params.id_curso;

    const curso = await cursosModel.postUpdate(id, req.body);

    return res.status(200).json({
        "messagem": "Dados editados com sucesso",
        "code": 200
    });
};

const deleteCurso = async (req, res) => {

    const id = req.params.id_curso;

    await cursosModel.deleteCurso(id);

    return res.status(200).json({
        "messagem": "Dados excluidos com sucesso",
        "code": 200
    });
};

module.exports = {
    getAll,
    postCreate,
    postUpdate,
    deleteCurso
};