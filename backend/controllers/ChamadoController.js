const MotivoController = (app) => {
    const { ChamadoModel } = app.models;

        /**
     * Lista motivos
     * @returns {Promise<void>}
     */
    const total = async () => ChamadoModel.total();

    /**
     * Lista motivos
     * @returns {Promise<void>}
     */
    const lista = async () => ChamadoModel.lista();


    const buscar = async (body) => {
        const { numero_chamado } = body


        if (!numero_chamado || numero_chamado === " ")
            throw 'Verifique as informações do chamado'

        const result = ChamadoModel.buscar(numero_chamado)

        return result
    }

    const criar = async (body) => {
        const { id_paciente,
            nome_paciente,
            id_motivo,
            numero_chamado,
            descricao,
            status,
            data_criacao } = body


        if (!id_paciente || !nome_paciente || !id_motivo || !descricao || !status || !data_criacao || id_paciente === " " || nome_paciente === " " || id_motivo === " " || descricao === " " || status === " " || data_criacao === " ")
            throw 'Verifique as informações do chamado'

        const result = ChamadoModel.criar(id_paciente, nome_paciente, id_motivo, numero_chamado, descricao, status, data_criacao)

        return result
    }

    const editar = async (body) => {
        const {
            id,
            id_paciente,
            nome_paciente,
            id_motivo,
            numero_chamado,
            descricao,
            status,
            data_criacao } = body


        if (!id || !id_paciente || !nome_paciente || !id_motivo || !descricao || !status || !data_criacao || id === " " || id_paciente === " " || nome_paciente === " " || id_motivo === " " || descricao === " " || status === " " || data_criacao === " ")
            throw 'Verifique as informações do chamado'

        const result = ChamadoModel.editar(id, id_paciente, nome_paciente, id_motivo, numero_chamado, descricao, status, data_criacao)

        return result
    }

    const excluir = async (body) => {
        const { id } = body


        if (!id || id === " ")
            throw 'Verifique as informações do chamado'

        const result = ChamadoModel.deletar(id)

        return result
    }

    return {
        total,
        lista,
        buscar,
        criar,
        editar,
        excluir
    };
};

module.exports = MotivoController;
