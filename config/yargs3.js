const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })

    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        // default: false, se quita ya que está por defecto en la app principal
        describe: 'muestra la tabla con consola'
    })

    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Define un límite hasta donde se puede multiplicar'
    })

    .option('gr', {
        alias: 'guardar',
        type: 'string',
        demandOption: false,
        default: 'SALIDA',
        describe: 'Define la dirección donde guardar'
    })

    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;
