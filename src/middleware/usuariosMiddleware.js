const validateFieldsUser = (req, res, next) => {

    const { body } = req;

    if(body.nome === undefined){
        return res.status(400).json({
            message: "O campo nome não pode ser indefinido"
        });
    }

    if(body.nome === ''){
        return res.status(400).json({
            message: "O campo nome não pode está  vazio"
        });
    }

    if(body.email === undefined){
        return res.status(400).json({
            message: "O campo email não pode ser indefinido"
        });
    }

    if(body.email === ''){
        return res.status(400).json({
            message: "O campo email não pode está vazio"
        });
    }

    if(body.cpf === undefined){
        return res.status(400).json({
            message: "O campo cpf não pode ser indefinido"
        });
    }

    if(body.cpf === undefined){
        return res.status(400).json({
            message: "O campo cpf não pode está vazio"
        });
    }

    next();
};

module.exports = { validateFieldsUser };