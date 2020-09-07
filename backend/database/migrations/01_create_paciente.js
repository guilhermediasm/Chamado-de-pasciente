
exports.up = knex => knex.schema.createTable('paciente', table => {
    table.increments('id').primary();
    table.string('cpf').notNullable();
    table.string('nome').notNullable();
    table.string('data_nascimento').notNullable();
    table.string('sexo').notNullable();
    table.string('telefone').notNullable();

    table.unique('cpf')

    table.integer('plano_id').notNullable()
        .unsigned()
        .references('id')
        .inTable('plano');
});

exports.down = knex => knex.schema.dropTable('paciente');
