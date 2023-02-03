const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');

//Settings
app.set('port', 3000 || process.env.PORT);
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', '.hbs');

app.engine('.hbs', engine({
    defaultLayout: __dirname + '/src/views/index',
    partialsDir: __dirname + '/src/views/partials',
    extname: '.hbs',
    helpers : require('./src/lib/hbs')
}))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname + '/src/public')));

//Global variables
app.use((req, res, next) => {
    next();
})

//Routes
app.use(require('./src/routes'));

app.use((req, res, next) => {
    res.status(404).send('RUTA NO ENCONTRADA');
})

app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto`, app.get('port'));
})