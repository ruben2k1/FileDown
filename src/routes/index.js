const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/usuarios', (req, res) => {
    res.render('index', {title: 'Ruben', p: 'Usuarios'})
})

module.exports = router;