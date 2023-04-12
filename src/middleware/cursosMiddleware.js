const validateFieldsCurso = (req, res, next) => {

    const { body } = req;

    if(body.nome === undefined){
        return res.status(400).json({
            message: "O campo nome não pode ser indefinido"
        });
    }

    if(body.nome ===''){
        return res.status(400).json({
            message: "O campo nome não pode está vazio"
        });
    }

    if(body.descricao === undefined){
        return res.status(400).json({
            message: "O campo descricao não pode ser indefinido"
        });
    }

    if(body.descricao ===''){
        return res.status(400).json({
            message: "O campo descricao não pode está vazio"
        });
    }

    next();
};

module.exports = { validateFieldsCurso };