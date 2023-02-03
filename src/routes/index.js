const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', async (req, res) => {
    const [results, fields] = await pool.execute('SELECT * FROM CONTENIDO;');
    res.render('index', {nombre: results[0][2]})
})

module.exports = router;