const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query('SELECT * FROM CONTENIDO', (error, results, fields) => {
        if (!error) {
            res.render('index', {results, layout: 'main'});
        }else{
          console.log(error);
        }
    })
})

router.post('/', (req, res) => {
    res.redirect(`/buscar/${req.body.archivo}`);
})

router.get('/buscar/:archivo?', (req, res) => {
    if (!req.params.archivo) {
        res.redirect('/');
    }else{
        pool.query(`SELECT * FROM CONTENIDO WHERE LOWER(NOMBRE) LIKE LOWER('%${req.params.archivo}%')`, (error, results, fields) => {
            res.render('index', {busqueda: req.params.archivo, results, layout: 'buscar'});
        })
    }
})

router.post('/buscar/:archivo?', (req, res) => {
    if (!req.params.archivo) {
        res.redirect('/');
    }else if (req.params.archivo==req.body.archivo){
        pool.query(`SELECT * FROM CONTENIDO WHERE LOWER(NOMBRE) LIKE LOWER('%${req.params.archivo}%')`, (error, results, fields) => {
            res.render('index', {busqueda: req.params.archivo, results, layout: 'buscar'});
        })
    }else{
        res.redirect(`/buscar/${req.body.archivo}`);
    }
})

router.get('/buscar', (req, res) => {
    res.redirect('/');
})

router.get('/archivos', (req, res) => {
    res.render('index', {layout: 'archivos'});
})

router.get('/ayuda', (req, res) => {
    res.render('index', {layout: 'ayuda'});
})

router.get('/contacto', (req, res) => {
    res.render('index', {layout: 'contacto'});
})

router.post('/contacto', (req, res) => {
    pool.query(`INSERT INTO CONTACTO (NOMBRE, CORREO, MENSAJE) VALUES ("${req.body.nombre}","${req.body.correo}","${req.body.mensaje}")`, (error, results, fields) => {
        res.redirect('/');
    })
})

module.exports = router;