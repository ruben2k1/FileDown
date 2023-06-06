const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', async (req, res) => {
    const jpg = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'JPG_') + LENGTH('JPG_')), FORMATO_ARCHIVO) AS RUTA_IMG, FECHA, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'JPG_') + LENGTH('JPG_')), FORMATO_ARCHIVO) AS RUTA_DESCARGA, RUTA_URL FROM ARCHIVOS_JPG`);
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
        
        if (results[0].length < 1) {
            res.render('index', {layout: '404'});
        }else{
            res.render('index', {busqueda: req.params.archivo, layout: 'buscar', results: results[0]});
        }
        
    }
})

router.post('/buscar/:archivo?', (req, res) => {
    if (!req.params.archivo) {
        res.redirect('/');
    }else if (req.params.archivo==req.body.archivo){
        const results = pool.query(`SELECT
        NOMBRE,
        DESCRIPCION,
        FORMATO_IMG,
        FORMATO_ARCHIVO,
        CASE
            WHEN LEFT(ID, 3) = 'JPG' THEN CONCAT('/public/files/jpg/', SUBSTRING_INDEX(SUBSTRING_INDEX(RUTA_URL, '/', -3), '/', -1))
            WHEN FORMATO_ARCHIVO = 'xls' THEN '/public/files/xls/1'
            WHEN FORMATO_ARCHIVO = 'rar' THEN '/public/files/rar/1'
            WHEN FORMATO_ARCHIVO = 'pdf' THEN '/public/files/pdf/1'
            ELSE RUTA_IMG
        END AS RUTA_IMG,
        RUTA_URL AS RUTA_DESCARGA
        FROM
        archivos_table;
        LIKE LOWER('%${req.params.archivo}%');
      `);
        res.render('index', {busqueda: req.params.archivo, layout: 'buscar', results: results[0]});
    }else{
        res.redirect(`/buscar/${req.body.archivo}`);
    }
})

router.get('/buscar', (req, res) => {
    res.redirect('/');
})

router.get('/novedades', async (req, res) => {
    const jpg = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'JPG_') + LENGTH('JPG_')), FORMATO_ARCHIVO) AS RUTA_IMG, FECHA, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'JPG_') + LENGTH('JPG_')), FORMATO_ARCHIVO) AS RUTA_DESCARGA, RUTA_URL FROM ARCHIVOS_JPG LIMIT 10`);
    const rar = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, RUTA_URL FROM ARCHIVOS_RAR LIMIT 10');
    const pdf = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, RUTA_URL FROM ARCHIVOS_PDF LIMIT 10');
    const xls = await pool.query('SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMG, FECHA, RUTA_URL FROM ARCHIVOS_XLS LIMIT 10');
    res.render('index', {layout: 'novedades', jpg: jpg[0], rar: rar[0], pdf: pdf[0], xls: xls[0]});
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
            results = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'JPG_') + LENGTH('JPG_')), FORMATO_ARCHIVO) AS RUTA_IMAGEN, FECHA, CONCAT( REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'JPG_') + LENGTH('JPG_')), FORMATO_ARCHIVO ) AS RUTA_DESCARGA FROM ARCHIVOS_JPG WHERE ID='JPG_${req.params.id}';`)
            res.render('index', {busqueda: req.params.id, layout: 'archivo', results: results[0]});
            break;
        case 'rar':
            results = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMAGEN, FECHA, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'RAR_') + LENGTH('RAR_')), FORMATO_ARCHIVO) AS RUTA_DESCARGA FROM ARCHIVOS_RAR WHERE ID='RAR_${req.params.id}';`);
            res.render('index', {busqueda: req.params.id, layout: 'archivo', results: results[0]});
            break;
        case 'pdf':
            results = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMAGEN, FECHA, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'PDF_') + LENGTH('PDF_')), FORMATO_ARCHIVO) AS RUTA_DESCARGA FROM ARCHIVOS_PDF WHERE ID='PDF_${req.params.id}';`);
            res.render('index', {busqueda: req.params.id, layout: 'archivo', results: results[0]});
            break;
        case 'xls':
            results = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMAGEN, FECHA, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'XLS_') + LENGTH('PDF_')), FORMATO_ARCHIVO) AS RUTA_DESCARGA FROM ARCHIVOS_XLS WHERE ID='XLS_${req.params.id}';`)
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
    const rar = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMAGEN, FECHA, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'RAR_') + LENGTH('RAR_')), FORMATO_ARCHIVO) AS RUTA_DESCARGA FROM ARCHIVOS_RAR;`);
    res.render('index', {layout: 'rar', rar: rar[0]});
})

router.get('/jpg', async (req, res) => {
    const jpg = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'JPG_') + LENGTH('JPG_')), FORMATO_ARCHIVO) AS RUTA_IMG, FECHA, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'JPG_') + LENGTH('JPG_')), FORMATO_ARCHIVO) AS RUTA_DESCARGA, RUTA_URL FROM ARCHIVOS_JPG`);
    res.render('index', {layout: 'jpg', jpg: jpg[0]});
})

router.get('/pdf', async (req, res) => {
    const pdf = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMAGEN, FECHA, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'PDF_') + LENGTH('PDF_')), FORMATO_ARCHIVO) AS RUTA_DESCARGA FROM ARCHIVOS_PDF;`);
    res.render('index', {layout: 'pdf', pdf: pdf[0]});
})

router.get('/xls', async (req, res) => {
    const xls = await pool.query(`SELECT ID, NOMBRE, DESCRIPCION, CONCAT(RUTA_IMG, FORMATO_IMG) AS RUTA_IMAGEN, FECHA, CONCAT(REPLACE(REPLACE(RUTA_IMG, '/1/', '/'), '1', ''), SUBSTRING(ID, INSTR(ID, 'XLS_') + LENGTH('PDF_')), FORMATO_ARCHIVO) AS RUTA_DESCARGA FROM ARCHIVOS_XLS`);
    res.render('index', {layout: 'xls', xls: xls[0]});
    
})

module.exports = router;