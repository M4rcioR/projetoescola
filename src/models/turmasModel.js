const connection = require('./connection');

const getAll = async () => {

    const [turmas] = await connection.execute('SELECT * FROM turmas');

    return turmas;
};

const postCreate = async (turma) => {

    const {nome, descricao} = turma;

    const query = 'INSERT INTO turmas (nome, descricao) VALUES (?, ?)';

    const createTurma = await connection.execute(query, [nome, descricao]);

    return createTurma;
};

const postUpdate = async (id, turma) => {

    const {nome, descricao} = turma;

    const query = 'UPDATE turmas SET nome = ?, descricao = ? WHERE id =?';

    const updateTurma = await connection.execute(query, [nome, descricao, id]);

    return updateTurma;
};

const deleteTurma = async (id) => {

    const deleteTurma = await connection.execute('DELETE FROM turmas WHERE id = ?', [id]);

    return deleteTurma;
};

module.exports = {
    getAll,
    postCreate,
    postUpdate,
    deleteTurma
};