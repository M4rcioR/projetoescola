const validateFieldsHorario = (req, res, next) => {

    if(req.body.curso === undefined){
        return res.status(400).json({
            message: "O campo curso não pode ser indefinido"
        });
    }

    if(req.body.curso ===''){
        return res.status(400).json({
            message: "O campo curso não pode está vazio"
        });
    }

    if(req.body.hora_inicio === undefined){
        return res.status(400).json({
            message: "O campo horario de inicio não pode ser indefinido"
        });
    }

    if(req.body.hora_inicio ===''){
        return res.status(400).json({
            message: "O campo horario de inicio não pode está vazio"
        });
    }

    if(req.body.hora_fim === undefined){
        return res.status(400).json({
            message: "O campo horario de inicio não pode ser indefinido"
        });
    }

    if(req.body.hora_fim ===''){
        return res.status(400).json({
            message: "O campo horario de inicio não pode está vazio"
        });
    }



    if(req.body.inicio === undefined){
        return res.status(400).json({
            message: "O campo data de inicio não pode ser indefinido"
        });
    }

    if(req.body.inicio ===''){
        return res.status(400).json({
            message: "O campo data de inicio não pode está vazio"
        });
    }

    if(req.body.fim === undefined){
        return res.status(400).json({
            message: "O campo data final não pode ser indefinido"
        });
    }

    if(req.body.fim ===''){
        return res.status(400).json({
            message: "O campo data final não pode está vazio"
        });
    }

    if(req.body.capacidade === undefined){
        return res.status(400).json({
            message: "O campo capacidade de alunos não pode ser indefinido"
        });
    }

    if(req.body.capacidade ===''){
        return res.status(400).json({
            message: "O campo capadidade de alunos não pode está vazio"
        });
    }

    if(req.body.v_disponivel === undefined){
        return res.status(400).json({
            message: "O campo vagas disponiveis não pode ser indefinido"
        });
    }

    if(req.body.v_disponivel ===''){
        return res.status(400).json({
            message: "O campo vaga disponiveis não pode está vazio"
        });
    }

    next();
};


module.exports = { validateFieldsHorario };