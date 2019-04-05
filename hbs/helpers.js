const hbs = require('hbs');

//Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((pal, idx) => {
        palabras[idx] = pal.charAt(0).toUpperCase() + pal.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});