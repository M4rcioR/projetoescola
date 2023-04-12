const validateFieldsTurma = (req, res, next) => {

    if(req.body.nome === undefined){
        return res.status(400).json({
            message: "O campo nome não pode ser indefinido"
        });
    }

    if(req.body.nome ===''){
        return res.status(400).json({
            message: "O campo nome não pode está vazio"
        });
    }

    if(req.body.descricao === undefined){
        return res.status(400).json({
            message: "O campo descricao não pode ser indefinido"
        });
    }

    if(req.body.descricao ===''){
        return res.status(400).json({
            message: "O campo descricao não pode está vazio"
        });
    }

    next();
};

module.exports = { validateFieldsTurma };