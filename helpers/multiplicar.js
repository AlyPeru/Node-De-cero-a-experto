//modularizacion con un helpers y tranformacio a async

const fs = require('fs');
const colors =require('colors');
//asi async como me gusta mas 
const crearArchivo = async(base = 5 , listar, limit = 10) =>{
console.log(limit)
    try{

    
        let salida, consola = ''
        for(let i =1 ; i<=limit ; i++){
            salida += `${base} x ${ i} = ${base * i}\n `;
            consola += `${base} ${'x'.yellow} ${ i} ${'='.green} ${base * i}\n `;
        
        }
        if(listar){ 
        console.log('===================='.rainbow)
        console.log(`Tabla de`.green, colors.blue(base))
        console.log('===================='.rainbow)
        console.log(consola)
    }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt` , salida )
        
        return(`tabla-${base}.txt`)
    }catch(err){
        throw err;
    }
    
}
module.exports = {
    crearArchivo
}
//===========OJO  Asi con PROMISE================
// const crearArchivo = (base = 5 )=>{

// **    return new Promise(( resolve, reject) => {

//         console.log('====================')
//         console.log(`Tabla del ${base}`)
//         console.log('====================')
    
//         let salida = ''
//         for(let i =1 ; i<=10 ; i++){
//             salida += `${base} x ${ i} = ${base * i}\n `;
//         }
//         console.log(salida)
        
//         fs.writeFileSync(`tabla-${base}.txt` , salida )
        
// **        resolve(`tabla-${base}.txt`)
//     })
    
// }

