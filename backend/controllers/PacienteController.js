const PacienteController = (app) => {
    const knex = app.database.index;
    const { PacienteModel } = app.models;

    const buscar_id = async (body) => {
        const { id_paciente } = body


        if (!id_paciente || id_paciente === " ")
            throw 'Verifique as informações do chamado'

        const result = PacienteModel.buscar(id_paciente)

        return result
    }

    /**
     * Lista pacientes
     * @returns {Promise<void>}
     */
    const lista = async () => {
        const pacientes = await knex('paciente')
            .join('plano', 'paciente.plano_id', '=', 'plano.id')
            .select(
                'paciente.id',
                'paciente.cpf',
                'paciente.nome',
                'paciente.data_nascimento',
                'paciente.sexo',
                'paciente.telefone',
                { plano: 'plano.descricao' })
        //.paginate({ perPage: 10, currentPage: 1 });

        return pacientes
    };


    /**
     * 
     * @param {String} cpf 
     * @param {String} nome 
     * @param {String} data_nascimento 
     * @param {String} sexo 
     * @param {String} telefone 
     * @param {Integer} plano_id 
     * @returns {Promise<void>}
     */
    const inserir = async (cpf, nome, data_nascimento, sexo, telefone, plano_id) => {

        try {
            const result = await knex('paciente')
                .insert({
                    cpf,
                    nome,
                    data_nascimento,
                    sexo,
                    telefone,
                    plano_id
                })
            if (result > 0)
                return 'Paciente cadastrado com sucesso'

            return 'Paciente não foi cadastrado'
        } catch (error) {

            if (error.code === 'ER_DUP_ENTRY') {
                throw 'Já existe um paciente com esse CPF'
            }

            if (error.code === 'ER_NO_REFERENCED_ROW_2') {
                throw 'Verifique o plano, não existe plano cadastrado com esse id'
            }

            throw 'Erro na hora de inserir paciente, verifique os dados'
        }

    };

    /**
     * @param {Integer} id 
     * @param {String} cpf 
     * @param {String} nome 
     * @param {String} data_nascimento 
     * @param {String} sexo 
     * @param {String} telefone 
     * @param {Integer} plano_id 
     * @returns {Promise<void>}
     */
    const atualizar = async (id, cpf, nome, data_nascimento, sexo, telefone, plano_id) => {

        try {
            const result = await knex('paciente')
                .where('id', id)
                .update({
                    cpf,
                    nome,
                    data_nascimento,
                    sexo,
                    telefone,
                    plano_id
                })
            if (result > 0)
                return 'Paciente atualizado com sucesso'

            return 'Nenhum paciente atualizado'
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw 'Já existe um paciente com esse CPF'
            }

            if (error.code === 'ER_NO_REFERENCED_ROW_2') {
                throw 'Verifique o plano, não existe plano cadastrado com esse id'
            }

            throw 'Erro na hora de atualizar paciente, verifique os dados'
        }

    };

    /**
    * 
    * @param {Integer} id 
    * @returns {Promise<void>}
    */
    const excluir = async (id) => {

        try {
            const result = await knex('paciente')
                .where({ id })
                .del()

            if (result == 0) {
                return 'Nenhum paciente excluido'
            }

            return 'Paciente exluido com sucesso'
        } catch (error) {
            throw 'Erro ao excluir paciente informado'
        }

    };


    return {
        buscar_id,
        lista,
        inserir,
        atualizar,
        excluir
    };
};

module.exports = PacienteController;
