module.exports = (app) => {
    const { PacienteController } = app.controllers;

    /**
   * Lista os motivos do chamado.
   * @param req
   * @param res
   * @returns {Promise<this>}
   */
    const buscarPacienteId = async (req, res) => {

        try {
            return res.status(200).json(await PacienteController.buscar_id(req.query));
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error });
        }
    };

    /**
     * Lista os motivos do chamado.
     * @param req
     * @param res
     * @returns {Promise<this>}
     */
    const index = async (req, res) => {
        try {

            return res.status(200).json(await PacienteController.lista());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
        }

    }

    /**
     * Lista os motivos do chamado.
     * @param req
     * @param res
     * @returns {Promise<this>}
     */
    const inserirPaciente = async (req, res) => {

        const {
            cpf, nome, data_nascimento, sexo, telefone, plano_id
        } = req.body;

        if (!cpf || !nome || !data_nascimento || !sexo || !telefone || !plano_id || cpf == " " || nome == " " || data_nascimento == " " || sexo == " " || telefone == " " || plano_id == " ")
            return res.status(500).json({ message: 'Insira as informações corretas' });

        try {
            return res.status(200).json(await PacienteController.inserir(cpf, nome, data_nascimento, sexo, telefone, plano_id));
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error });
        }

    }

    /**
 * Lista os motivos do chamado.
 * @param req
 * @param res
 * @returns {Promise<this>}
 */
    const atualizarPaciente = async (req, res) => {

        const {
            id, cpf, nome, data_nascimento, sexo, telefone, plano_id
        } = req.body;

        if (!id || !cpf || !nome || !data_nascimento || !sexo || !telefone || !plano_id || id == " " || cpf == " " || nome == " " || data_nascimento == " " || sexo == " " || telefone == " " || plano_id == " ")
            return res.status(500).json({ message: 'Insira as informações corretas' });

        try {
            return res.status(200).json(await PacienteController.atualizar(id, cpf, nome, data_nascimento, sexo, telefone, plano_id));
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error });
        }

    }

    /**
    * Lista os motivos do chamado.
    * @param req
    * @param res
    * @returns {Promise<this>}
    */
    const excluirPaciente = async (req, res) => {

        const {
            id
        } = req.body;

        if (!id || id == " ")
            return res.status(500).json({ message: 'Insira as informações corretas' });

        try {
            return res.status(200).json(await PacienteController.excluir(id));
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error });
        }

    }

    app.route('/paciente/buscarPacienteId')
        .get(buscarPacienteId);

    app.route('/paciente/listaPaciente')
        .get(index);

    app.route('/paciente/inserirPaciente')
        .post(inserirPaciente);

    app.route('/paciente/atualizarPaciente')
        .put(atualizarPaciente);

    app.route('/paciente/excluirPaciente')
        .delete(excluirPaciente);
};
