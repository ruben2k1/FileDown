const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', async (req, res) => {
    const jpg = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, RUTA_URL FROM ARCHIVOS_JPG');
    const rar = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, RUTA_URL FROM ARCHIVOS_RAR');
    const pdf = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, RUTA_URL FROM ARCHIVOS_PDF');
    const xls = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, RUTA_URL FROM ARCHIVOS_XLS');
    res.render('index', {layout: 'main', jpg: jpg[0], rar: rar[0], pdf: pdf[0], xls: xls[0]});
})

router.post('/buscar', (req, res) => {
    res.redirect(`/buscar/${req.body.archivo}`);
})

router.get('/buscar/:archivo?', async (req, res) => {
    if (!req.params.archivo) {
        res.redirect('/');
    }else{
        const results = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, RUTA_URL FROM ARCHIVOS_TABLE WHERE LOWER(NOMBRE) LIKE LOWER('%${req.params.archivo}%')`);
        res.render('index', {busqueda: req.params.archivo, layout: 'buscar', results: results[0]});
    }
})

router.post('/buscar/:archivo?', (req, res) => {
    if (!req.params.archivo) {
        res.redirect('/');
    }else if (req.params.archivo==req.body.archivo){
        const results = pool.query(`SELECT ID, NOMBRE, DESCRIPCION, RUTA_URL FROM CONTENIDO WHERE LOWER(NOMBRE) LIKE LOWER('%${req.params.archivo}%')`);
        res.render('index', {busqueda: req.params.archivo, layout: 'buscar', results: results[0]});
    }else{
        res.redirect(`/buscar/${req.body.archivo}`);
    }
})

router.get('/buscar', (req, res) => {
    res.redirect('/');
})

router.get('/novedades', async (req, res) => {
    const results = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, RUTA_URL FROM ARCHIVOS_TABLE');
    res.render('index', {layout: 'novedades', results: results[0]});
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

router.get('/archivo/:tipo/:id', async (req, res) => {
    let results;

    switch (req.params.tipo) {
        case 'jpg':
            results = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, CONCAT(RUTA_IMG, FORMATO_ARCHIVO) AS RUTA_URL FROM ARCHIVOS_JPG')
            res.render('index', {busqueda: req.params.id, layout: 'archivo', results: results[0]});
            break;
        case 'rar':
            results = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, CONCAT(RUTA_IMG, FORMATO_ARCHIVO) AS RUTA_URL FROM ARCHIVOS_RAR')
            res.render('index', {busqueda: req.params.id, layout: 'archivo', results: results[0]});
            break;
        case 'pdf':
            results = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, CONCAT(RUTA_IMG, FORMATO_ARCHIVO) AS RUTA_URL FROM ARCHIVOS_PDF')
            res.render('index', {busqueda: req.params.id, layout: 'archivo', results: results[0]});
            break;
        case 'xls':
            results = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, CONCAT(RUTA_IMG, FORMATO_ARCHIVO) AS RUTA_URL FROM ARCHIVOS_XLS')
            res.render('index', {busqueda: req.params.id, layout: 'archivo', results: results[0]});
            break;
        default:
            if (!req.params.id) {
                res.redirect('/');
            }
            break;
    }
})

router.get('/rar', async (req, res) => {
    let results = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, CONCAT(RUTA_IMG, FORMATO_ARCHIVO) AS RUTA_URL FROM ARCHIVOS_RAR')
    res.render('index', {layout: 'rar', results: results[0]})
})

router.get('/jpg', async (req, res) => {
    let results = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, CONCAT(RUTA_IMG, FORMATO_ARCHIVO) AS RUTA_URL FROM ARCHIVOS_JPG')
    res.render('index', {layout: 'jpg', results: results[0]})
})

router.get('/pdf', async (req, res) => {
    let results = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, CONCAT(RUTA_IMG, FORMATO_ARCHIVO) AS RUTA_URL FROM ARCHIVOS_PDF')
    res.render('index', {layout: 'pdf', results: results[0]})
})

router.get('/xls', async (req, res) => {
    let results = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, CONCAT(RUTA_IMG, FORMATO_ARCHIVO) AS RUTA_URL FROM ARCHIVOS_XLS')
    res.render('index', {layout: 'xls', results: results[0]})
})

module.exports = router;