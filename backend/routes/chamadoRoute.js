module.exports = (app) => {
    const { ChamadoController } = app.controllers;
    /**
         * Lista os motivos do chamado.
         * @param req
         * @param res
         * @returns {Promise<this>}
         */
    const totalChamados = async (req, res) => {
        try {
            return res.status(200).json(await ChamadoController.total());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
        }
    };

    /**
     * Lista os motivos do chamado.
     * @param req
     * @param res
     * @returns {Promise<this>}
     */
    const listaChamados = async (req, res) => {
        try {
            return res.status(200).json(await ChamadoController.lista());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
        }
    };

    /**
     * Lista os motivos do chamado.
     * @param req
     * @param res
     * @returns {Promise<this>}
     */
    const buscarChamados = async (req, res) => {
        try {
            return res.status(200).json(await ChamadoController.buscar(req.query));
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
    const criarChamados = async (req, res) => {
        try {
            return res.status(200).json({ response: await ChamadoController.criar(req.body) });
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
    const editarChamado = async (req, res) => {
        try {
            return res.status(200).json({ response: await ChamadoController.editar(req.body) });
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
    const excluirChamado = async (req, res) => {
        try {
            return res.status(200).json({ response: await ChamadoController.excluir(req.query) });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error });
        }
    };

    app.route('/chamado/totalChamados')
        .get(totalChamados);

    app.route('/chamado/lista')
        .get(listaChamados);

    app.route('/chamado/buscarChamados')
        .get(buscarChamados);

    app.route('/chamado/criarChamado')
        .post(criarChamados);

    app.route('/chamado/editarChamado')
        .put(editarChamado);

    app.route('/chamado/excluirChamado')
        .delete(excluirChamado);
};
