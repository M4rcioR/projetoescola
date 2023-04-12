const connection = require('./connection');
const bcrypt = require('bcrypt');


const getAll = async () => {

    const [usuarios] = await connection.execute('SELECT * FROM usuarios');

    return usuarios;
};

const postCreate = async (usuario) => {

    const {nome, email, cpf, senha} = usuario;

    const salt1 = await bcrypt.genSalt(10);

    const senhaBcrypt = await bcrypt.hash(senha, salt1);

    const query = 'INSERT INTO usuarios (nome, email, cpf, senha) VALUES(?, ?, ?, ?)';

    const createUsuario = await connection.execute(query, [nome, email, cpf, senhaBcrypt]);

    return createUsuario;
};

const postUpdate = async (id, usuario) => {

    const {nome, email, cpf, senha} = usuario;

    const query = 'UPDATE usuarios SET nome = ?, email = ?, cpf = ?, senha = ? WHERE id = ?';

    const updateUsuario = await connection.execute(query, [nome, email, cpf, senha, id]);

    return updateUsuario;
};

const deleteUsuario = async (id) => {

    const deleteUsuario = await connection.execute('DELETE FROM usuarios WHERE id = ?', [id]);

    return deleteUsuario;
};

module.exports = {
    getAll,
    postCreate,
    postUpdate,
    deleteUsuario,
};