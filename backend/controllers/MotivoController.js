const MotivoController = (app) => {
  const { MotivoModel } = app.models;
  /**
   * Lista motivos
   * @returns {Promise<void>}
   */
  const lista = async () => MotivoModel.lista();

  return {
    lista,
  };
};

module.exports = MotivoController;
