const PlanoController = (app) => {
    const knex = app.database.index;

    /**
     * Listar planos
     * @returns {Promise<void>}
     */
    const lista = async () => {
        const planos = await knex('plano').select('*')
        //.paginate({ perPage: 10, currentPage: 1 });

        return planos
        /* if (planos.data.length > 0) {
            return planos
        }
        return "Não existe planos cadastrados" */
    };


    /**
     * 
     * @param {String} descricao 
     * @returns {Promise<void>}
     */
    const inserir = async (descricao) => {

        try {
            const result = await knex('plano')
                .insert({
                    descricao
                })
            if (result > 0)
                return 'Plano cadastrado com sucesso'

            return 'Plano não foi cadastrado'
        } catch (error) {
            throw 'Erro na hora de inserir o plano, verifique os dados'
        }

    };

    /**
     * @param {Integer} id 
     * @param {String} descricao 
     * @returns {Promise<void>}
     */
    const atualizar = async (id, descricao) => {

        try {
            const result = await knex('plano')
                .where({ id })
                .update({
                    descricao
                })
            if (result > 0)
                return 'Plano Alterado com sucesso'


            return 'Nenhum plano atualizado'
        } catch (error) {
            throw 'Erro em atualizar plano'
        }

    };

    /**
    * 
    * @param {Integer} id 
    * @returns {Promise<void>}
    */
    const excluir = async (id) => {

        try {
            const result = await knex('plano')
                .where({ id })
                .del()

            if (result == 0) {
                return 'Nenhum plano excluido'
            }

            return 'Plano exluido com sucesso'
        } catch (error) {

            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw 'Esse plano esta sendo usado por um paciente'
            }
            
            throw 'Erro ao excluir plano informado'
        }

    };


    return {
        lista,
        inserir,
        atualizar,
        excluir
    };
};

module.exports = PlanoController;
