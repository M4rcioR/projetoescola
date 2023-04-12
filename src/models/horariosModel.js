const connection = require('./connection');

const getAll = async () => {

    const [horarios] = await connection.execute('SELECT * FROM horarios');

    return horarios;
};

const postCreate =  async (horario) => {

    const {curso, hora_inicio, hora_fim, inicio, fim, capacidade, v_disponivel} = horario;

    const query = 'INSERT INTO horarios (curso, hora_inicio, hora_fim, inicio, fim, capacidade, v_disponivel) VALUES (?, ?, ?, ?, ?, ?, ?)';

    const createHorario = await connection.execute(query, [curso, hora_inicio, hora_fim, inicio, fim, capacidade, v_disponivel]);

    return createHorario;
};

const postUpdate =  async (id, horario) => {

    const {curso, hora_incio, hora_fim, incio, fim, capacidade, v_disponivel} = horario;

    const query = 'UPDATE horario SET curso = ?, hora_inicio = ?, hora_fim = ?, incio = ?, fim = ?, capacidade = ?, v_disponivel = ? WHERE id = ?';

    const updateHorario = await connection.execute(query, [curso, hora_incio, hora_fim, incio, fim, capacidade, v_disponivel, id]);

    return updateHorario;
};

const deleteHorario = async (id) => {

    const deleteHorario = await connection.execute('DELETE FROM horarios WHERE id =?', [id]);

    return deleteHorario;
};

module.exports = {
    getAll,
    postCreate,
    postUpdate,
    deleteHorario
};