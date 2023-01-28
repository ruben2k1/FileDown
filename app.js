const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');

//Settings
app.set('port', 3000 || process.env.PORT);

app.set('views', path.join(__dirname, '/src/views'));

app.engine('.hbs', engine({
    extname: '.hbs',
    partialsDir: __dirname + '/src/views/partials',
    layoutsDir: __dirname + '/src/views/layouts',
    helpers : require('./src/lib/hbs')
}));

app.set('view engine', '.hbs');

app.use(express.json());

//Global variables
app.use((req, res, next) => {
    next();
})

//Routes
app.use(require('./src/routes'))

app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada')
})

app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto`, app.get('port'));
})