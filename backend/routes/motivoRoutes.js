module.exports = (app) => {
  const { MotivoController } = app.controllers;

  /**
   * Lista os motivos do chamado.
   * @param req
   * @param res
   * @returns {Promise<this>}
   */
  const listaMotivos = async (req, res) => {
    try {
      return res.status(200).json({ response: await MotivoController.lista() });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
    }
  };
  app.route('/motivo')
    .get(listaMotivos);
};
