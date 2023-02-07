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

router.post('/', (req, res) => {
    res.redirect(`/buscar/${req.body.archivo}`);
})

router.get('/buscar/:archivo', (req, res) => {
    pool.query(`SELECT * FROM CONTENIDO WHERE NOMBRE LIKE '%${req.params.archivo}%'`, (error, results, fields) => {
        res.render('buscar', {results});
    })
})

router.post('/buscar/:archivo', (req, res) => {
    if (req.params.archivo==req.body.archivo) {
        pool.query(`SELECT * FROM CONTENIDO WHERE NOMBRE LIKE '%${req.params.archivo}%'`, (error, results, fields) => {
            res.render('buscar', {results});
        })
    } else {
        res.redirect(`/buscar/${req.body.archivo}`);
    }
})

router.get('/buscar', (req, res) => {
    res.redirect('/');
})

module.exports = router;