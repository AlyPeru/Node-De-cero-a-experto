//yargs sirve para poder manipular (pasar datos o condicinar datos) datos desde el backend(consola)
//puedes crear tus propios comandos se muestra con el --help y puedes invocarlo como comando como el dir por ejemplo
const argv = require('yargs')
.option('b',{
    alias : 'base',
    type : 'number',
    demandOption: true,
    describe : 'Toma la base para multiplicar'
})
.option('l',{
    alias : 'listar',
    type : 'boolean',
    default: false,
    describe : 'Muesta la tabla de multiplicar'
})
.option('h',{
    alias : 'hasta',
    type : 'number',
    default: 10,
    describe : 'Coloca el limite de repeticines de la tabla'
})
.check((argv, options)=>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
    }
    return true
})
.argv;//esta siempre debe ser la termiacin

module.exports = argv;