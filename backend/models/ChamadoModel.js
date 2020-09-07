const { Client } = require('@elastic/elasticsearch')

const Chamado = (app) => {
    // const client = new Client({ node: 'https://search-teste-fullstack-js-2v3vh2ph5iuthuvawkrfwpfwnq.sa-east-1.es.amazonaws.com:3402/ms_chamados_teste_classe4_2' })
    const client = new Client({ node: 'http://localhost:9200' })

    /**
     * quantidade de chamdos
     * @returns {Promise<void>}
     */
    const total = async () => {

        const { body } = await client.search({
            index: 'ms_chamados_teste_classe4_2'
        })
        console.log(body)

        return body.hits.total.value
    };

    /**
     * lista de chamdos
     * @returns {Promise<void>}
     */
    const lista = async () => {

        const { body } = await client.search({
            index: 'ms_chamados_teste_classe4_2'
        })
        const lista = await body.hits.hits.map(value => {

            const data = {
                "id": value._id,
                "numero_chamado": value._source.numero_chamado,
                "data_criacao": value._source.data_criacao,
                "descricao": value._source.descricao,
                "id_motivo": value._source.id_motivo,
                "id_paciente": value._source.id_paciente,
                "nome_paciente": value._source.nome_paciente,
                "status": value._source.status,
            }
            return data
        })

        return lista
    };

    /**
     * lista de chamdos
     * @param {Number} numero_chamado
     * @returns {Promise<void>}
     */
    const buscar = async (numero_chamado) => {
        const { body } = await client.search({
            index: 'ms_chamados_teste_classe4_2',
            body: {
                query: {
                    match: { numero_chamado }
                }
            }
        })
        const lista = await body.hits.hits.map(value => {

            const data = {
                "id": value._id,
                "numero_chamado": value._source.numero_chamado,
                "data_criacao": value._source.data_criacao,
                "descricao": value._source.descricao,
                "id_motivo": value._source.id_motivo,
                "id_paciente": value._source.id_paciente,
                "nome_paciente": value._source.nome_paciente,
                "status": value._source.status,
            }
            return data
        })


        return lista
    };

    /**
     * 
     * @param {Integer} id_paciente 
     * @param {String} nome_paciente 
     * @param {Integer} id_motivo 
     * @param {Integer} numero_chamado 
     * @param {String} descricao 
     * @param {String} status 
     * @param {String} data_criacao 
     * @returns {Promise<void>}
     */
    const criar = async (
        id_paciente,
        nome_paciente,
        id_motivo,
        numero_chamado,
        descricao,
        status,
        data_criacao
    ) => {

        const { body } = await client.index({
            index: 'ms_chamados_teste_classe4_2',
            type: "_doc",
            body:
            {
                id_paciente,
                nome_paciente,
                id_motivo,
                numero_chamado,
                descricao,
                status,
                data_criacao
            }
        })

        return body
    };

    /**
     * @param {String} id
     * @param {int} id_paciente 
     * @param {String} nome_paciente 
     * @param {int} id_motivo 
     * @param {int} numero_chamado 
     * @param {String} descricao 
     * @param {String} status 
     * @param {String} data_criacao 
     * @returns {Promise<void>}
     */
    const editar = async (
        id,
        id_paciente,
        nome_paciente,
        id_motivo,
        numero_chamado,
        descricao,
        status,
        data_criacao
    ) => {

        const { body } = await client.update({
            id: id,
            index: 'ms_chamados_teste_classe4_2',
            body:
            {
                doc: {
                    id_paciente,
                    nome_paciente,
                    id_motivo,
                    numero_chamado,
                    descricao,
                    status,
                    data_criacao
                }
            }
        })

        if (body._shards.successful == 1) {
            return 'Registro atualizado com sucesso'
        }
        else {
            return 'Não foi possivel apagar o registro'
        }

    };

    /**
    * @param {String} id
    * @returns {Promise<void>}
    */
    const deletar = async (
        id,
    ) => {

        const { body } = await client.delete({
            id: id,
            index: 'ms_chamados_teste_classe4_2',
            type: '_doc'
        })
        if (body._shards.successful == 1) {
            return 'Registro deletado com sucesso'
        }
        else {
            return 'Não foi possivel apagar o registro'
        }

    };

    return {
        total,
        lista,
        buscar,
        criar,
        editar,
        deletar
    };
};

module.exports = Chamado;
