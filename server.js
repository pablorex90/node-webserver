const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'pablo',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(8080, () => {
    console.log('Escuchando server puerto 8080');
});