import { engine } from 'express-handlebars';
import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dual2 } from './src/database.cjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('port', 3000 || process.env.PORT);
app.use(express.json());
app.engine('.hbs', engine({
    defaultLayout: "main",
    extname: '.hbs',
    partialsDir: __dirname + '/src/views/partials',
    helpers : {}
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/src/views'));

app.get('/', (req, res) => {
    res.render('index', {
        p: "Hola",
        title: "Plantilla"
    });
})

app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada')
})

app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto`, app.get('port'));
})