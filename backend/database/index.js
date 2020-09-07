
module.exports = (app) => {
    const config = require('../knexfile.js');


    const knex = require('knex')(config.development);

    const { attachPaginate } = require('knex-paginate');
    attachPaginate();
    
    return knex;
};
