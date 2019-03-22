const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));


// app.get('/', (req, res) => {
//     // res.send('Hello World');
//     let salida = {
//         nombre: 'Fernando',
//         edad: 32,
//         url: req.url
//     }
//     res.send(salida);
// });

// app.get('/data', (req, res) => {
//     res.send('Hola data');
// });

app.listen(8080, () => {
    console.log('Escuchando server puerto 8080');
});