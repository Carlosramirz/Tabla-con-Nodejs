const fs = require('fs');
require('colors');


const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {

        
        let salida = '';
    
        for ( let i = 1; i <=hasta; i++) {
            salida += `${ base } * ${ i } = ${ base * i}\n`;
        }
        if ( listar) {
            console.log('==================='.green)
            console.log(`Tabla del: ${base}`)
            console.log('==================='.green)
            console.log(salida);
        }
    
        /* fs.writeFile( `Tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log (`tabla-${base}.txt creado`);
        } ) */
    
        fs.writeFileSync( `./salida/Tabla-${base}.txt`, salida);
    
        return `tabla-${ base }.txt creado`;
    } catch (err) {
        throw err;
    }

}

module.exports = {crearArchivo};