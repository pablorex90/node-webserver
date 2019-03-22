const http = require('http');

http.createServer((req, res) => {
    // res.write('Hola Mundo');
    res.writeHead(200, { 'Content-type': 'application/json' });
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuchando puerto 8080');