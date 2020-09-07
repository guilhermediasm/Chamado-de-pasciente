const Paciente = (app) => {
    const knex = app.database.index;

    /**
     * lista de chamdos
     * @param {Number} id_paciente
     * @returns {Promise<void>}
     */
    const buscar = async (id_paciente) => {
        const result = await knex('paciente')
            .where('id', id_paciente)
       
        if (result.length > 0) {
            return result[0].nome
        }
        return " "
    };




    return {

        buscar,

    };
};

module.exports = Paciente;
