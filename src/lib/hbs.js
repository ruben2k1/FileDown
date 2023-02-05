const pool = require('../database');
const handlebars = require('handlebars');
const helpers = {};

/*
helpers.getIndexFiles = async () => {
    const [results, fields] = await pool.execute('SELECT * FROM CONTENIDO');
    return results;
}

helpers.getIndexFiles()

module.exports = helpers;
*/