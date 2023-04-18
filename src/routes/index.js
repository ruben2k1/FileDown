const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query('SELECT NOMBRE, DESCRIPCION, RUTA_URL FROM CONTENIDO LIMIT 20', (error, results, fields) => {
        if (!error) {
            res.render('index', {results, layout: 'main'});
        }else{
          console.log(error);
        }
    })
})

router.post('/buscar', (req, res) => {
    res.redirect(`/buscar/${req.body.archivo}`);
})

router.get('/buscar/:archivo?', (req, res) => {
    if (!req.params.archivo) {
        res.redirect('/');
    }else{
        pool.query(`SELECT NOMBRE, DESCRIPCION, RUTA_URL FROM CONTENIDO WHERE LOWER(NOMBRE) LIKE LOWER('%${req.params.archivo}%')`, (error, results, fields) => {
            res.render('index', {busqueda: req.params.archivo, results, layout: 'buscar'});
        })
    }
})

router.post('/buscar/:archivo?', (req, res) => {
    if (!req.params.archivo) {
        res.redirect('/');
    }else if (req.params.archivo==req.body.archivo){
        pool.query(`SELECT NOMBRE, DESCRIPCION, RUTA_URL FROM CONTENIDO WHERE LOWER(NOMBRE) LIKE LOWER('%${req.params.archivo}%')`, (error, results, fields) => {
            res.render('index', {busqueda: req.params.archivo, results, layout: 'buscar'});
        })
    }else{
        res.redirect(`/buscar/${req.body.archivo}`);
    }
})

router.get('/buscar', (req, res) => {
    res.redirect('/');
})

router.get('/novedades', (req, res) => {
    res.render('index', {layout: 'novedades'});
})

router.get('/ayuda', (req, res) => {
    res.render('index', {layout: 'ayuda'});
})

router.get('/contacto', (req, res) => {
    res.render('index', {layout: 'contacto'});
})

router.post('/contacto', (req, res) => {
    res.redirect(`/buscar/${req.body.archivo}`);
})

router.post('/enviar', (req, res) => {
    pool.query(`INSERT INTO CONTACTO (NOMBRE, CORREO, MENSAJE) VALUES ("${req.body.nombre}","${req.body.correo}","${req.body.mensaje}")`, (error, results, fields) => {
        res.redirect('/');
    })
})

router.get('/archivo/:id', (req, res) => {
    pool.query(`SELECT NOMBRE, DESCRIPCION, RUTA_URL FROM CONTENIDO WHERE ID=${req.params.id}`, (error, results, fields) => {
        res.render('index', {busqueda: req.params.id, results, layout: 'buscar'});
    })
})

module.exports = router;