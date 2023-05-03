const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', async (req, res) => {
    const [ results ] = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, RUTA_URL, CONCAT(RUTA_IMG, FORMATO) AS RUTA FROM ARCHIVOS_TABLE LIMIT 20');
    res.render('index', {layout: 'main', results});
})

router.post('/buscar', (req, res) => {
    res.redirect(`/buscar/${req.body.archivo}`);
})

router.get('/buscar/:archivo?', async (req, res) => {
    if (!req.params.archivo) {
        res.redirect('/');
    }else{
        const [ results ] = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, RUTA_URL, CONCAT(RUTA_IMG, FORMATO) AS RUTA FROM ARCHIVOS_TABLE WHERE LOWER(NOMBRE) LIKE LOWER('%${req.params.archivo}%')`);
        res.render('index', {busqueda: req.params.archivo, results, layout: 'buscar'});
    }
})

router.post('/buscar/:archivo?', (req, res) => {
    if (!req.params.archivo) {
        res.redirect('/');
    }else if (req.params.archivo==req.body.archivo){
        const [ results ] = pool.query(`SELECT ID, NOMBRE, DESCRIPCION, RUTA_URL FROM CONTENIDO WHERE LOWER(NOMBRE) LIKE LOWER('%${req.params.archivo}%')`);
        res.render('index', {busqueda: req.params.archivo, results, layout: 'buscar'});
    }else{
        res.redirect(`/buscar/${req.body.archivo}`);
    }
})

router.get('/buscar', (req, res) => {
    res.redirect('/');
})

router.get('/novedades', async (req, res) => {
    const [ results ] = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, RUTA_URL, CONCAT(RUTA_IMG, FORMATO) AS RUTA FROM ARCHIVOS_TABLE LIMIT 20');
    res.render('index', {results, layout: 'novedades'});
})

router.get('/contacto', (req, res) => {
    res.render('index', {layout: 'contacto'});
})

router.post('/contacto', (req, res) => {
    res.redirect(`/buscar/${req.body.archivo}`);
})

router.post('/enviar', async (req, res) => {
    const [ results ] = await pool.query(`INSERT INTO CONTACTO (NOMBRE, CORREO, MENSAJE) VALUES ("${req.body.nombre}","${req.body.correo}","${req.body.mensaje}")`);

    if (results.affectedRows===1) {
        res.redirect('/');
    }else{
        res.redirect('/');
    }
})

router.get('/archivo/:id', async (req, res) => {
    const [ results ] = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, RUTA_URL FROM ARCHIVOS_TABLE WHERE ID=${req.params.id}`);
    res.render('index', {busqueda: req.params.id, results, layout: 'buscar'});
})

module.exports = router;