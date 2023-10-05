const fs = require('fs');
const colors = require('colors');
const path = require('path');

const resolver = (base, hasta) => {
    let salida = '';
    for (let i = 1; i <= hasta; i++) { 
        salida += `${base} ${'x'.yellow} ${i} ${'='.green} ${base * i} \n`;
    }
    return salida;
}

const respuesta = (base, salida) => {
    console.log('===================='.red);
    console.log(' Tabla del:'.red, colors.yellow(base));
    console.log('===================='.red);
    console.log(salida);
    return salida;
}

const crearArchivo = async (base = 5, listar = false, hasta, carpeta) => {
    try {
        let salida = resolver(base, hasta);
        if (listar) {
            respuesta(base, salida);
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida); 
        const Carpetadir = path.join(carpeta,`tabla-${base}.txt`)
        fs.writeFileSync(Carpetadir, colors.strip(salida));
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}
