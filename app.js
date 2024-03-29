const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');
require('dotenv').config();

//Settings
app.set('port', 3000 || process.env.PORT);
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', '.hbs');

app.engine('.hbs', engine({
    partialsDir: path.join(__dirname, '/src/views/partials'),
    extname: '.hbs',
    helpers: {
        paginateHelper: require('express-handlebars-paginate').createPagination()
    }
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
    res.render('index', {layout: '404'});
})

app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto`, app.get('port'));
})