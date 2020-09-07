module.exports = (app) => {
  const { PlanoController } = app.controllers;

  /**
   * Lista os motivos do chamado.
   * @param req
   * @param res
   * @returns {Promise<this>}
   */
  const index = async (req, res) => {
    try {

      return res.status(200).json(await PlanoController.lista());
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
  const inserirPlano = async (req, res) => {

    const {
      descricao
    } = req.body;

    if (!descricao || descricao == " ")
      return res.status(500).json({ message: 'Insira as informações corretas' });

    try {
      return res.status(200).json(await PlanoController.inserir(descricao));
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
  const atualizarPlano = async (req, res) => {

    const {
      id,
      descricao
    } = req.body;

    if (!id || id == " " || !descricao || descricao == " ")
      return res.status(500).json({ message: 'Insira as informações corretas' });

    try {
      return res.status(200).json(await PlanoController.atualizar(id, descricao));
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
  const excluirPlano = async (req, res) => {

    const {
      id
    } = req.body;

    if (!id || id == " ")
      return res.status(500).json({ message: 'Insira as informações corretas' });

    try {
      return res.status(200).json(await PlanoController.excluir(id));
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error });
    }

  }

  app.route('/plano/listaPlano')
    .get(index);

  app.route('/plano/inserirPlano')
    .post(inserirPlano);

  app.route('/plano/atualizarPlano')
    .put(atualizarPlano);

  app.route('/plano/excluirPlano')
    .delete(excluirPlano);
};
