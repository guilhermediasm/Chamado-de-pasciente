const MotivoModel = (app) => {
  const { redis } = app;

  /**
   * Busca a lista de motivos no redis
   * @returns {Promise<void>}
   */
  const lista = async () => JSON.parse(await redis.mget('js:teste:motivos'));
  
  return {
    lista,
  };
};

module.exports = MotivoModel;
