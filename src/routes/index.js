const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query('SELECT * FROM CONTENIDO', (error, results, fields) => {
        if (!error) {
            res.render('index', {results})
        }else{
          console.log(error);
        }
    })
})

router.post('/', async (req, res) => {
    res.render('index', {nombre: req.body.search}); //Renderizar el search en otra plantilla con otra ruta, por ejemplo /search
})

router.get('/search', async (req, res) => {
    res.render('index');
})

module.exports = router;