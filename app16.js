const {crearArchivo} = require (`./helpers/multiplicar5`)
const colors = require ('colors')
const argv = require('./config/yargs3')


console.clear();

console.log(argv);

console.log("********************");
console.log(argv.b);

crearArchivo(argv.b, argv.l, argv.h, argv.gr)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
