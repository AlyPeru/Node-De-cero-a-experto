// crear un archibo .txt con el resultado de una variable
const {crearArchivo} = require('./helpers/multiplicar')

const colores = require('colors')
const argv = require('./config/yargs')

console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then(resol => console.log(resol.rainbow, 'creado'))
    .catch(err => console.log(err))


//===========NO ESCONVENIENTE solo fines de enseñanza===========
//imp un array con los valores pasados por consola
// console.log(process.argv)

// const [, , arg3 = 'base=5'] = process.argv
// const [, base = 8] = arg3.split('=')
//===========FIN ===============
// const base= 7
