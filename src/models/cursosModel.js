const connection = require('./connection');


const getAll = async () => {

    const [cursos] = await connection.execute('SELECT * FROM cursos');

    return cursos;
};

const postCreate = async (curso) => {

    const {nome, descricao} = curso;

    const query = 'INSERT INTO cursos (nome, descricao) VALUE (?, ?, ?)'; 

    const createCurso = await connection.execute(query, [nome, descricao]);

    return createCurso;
};

const postUpdate = async (id, curso) => {

    const {nome, descricao} = curso;

    const query = 'UPDATE cursos SET nome = ?, descricao = ? WHERE id = ?';

    const updateCurso = await connection.execute(query, [nome, descricao, id]);

    return updateCurso;
};

const deleteCurso = async (id) => {

    const deleteCurso = await connection.execute('DELETE FROM cursos WHERE id = ?', [id]);

    return deleteCurso;
};

module.exports = {
    getAll,
    postCreate,
    postUpdate,
    deleteCurso
};