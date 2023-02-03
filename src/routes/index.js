const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', async (req, res) => {
    const [results, fields] = await pool.execute('SELECT * FROM CONTENIDO;');
    res.render('index', {nombre: results[0][2]});
})

router.post('/', async (req, res) => {
    res.render('index', {nombre: req.body.search}); //Renderizar el search en otra plantilla con otra ruta, por ejemplo /search
})

router.get('/search', async (req, res) => {
    res.render('index');
})

module.exports = router;