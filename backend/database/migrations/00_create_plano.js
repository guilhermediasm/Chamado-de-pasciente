
exports.up = knex => knex.schema.createTable('plano', table => {
    table.increments('id').primary();
    table.string('descricao').notNullable();

});

exports.down = knex => knex.schema.dropTable('plano');
