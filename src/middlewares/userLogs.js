const path = require ('path')
const fs = require('fs');

// El usuario ingresó a la ruta:___________
const userLogs = (req,res,next) => {
 
    fs.appendFileSync(
        path.resolve(__dirname,'..','logs','userLogs.txt'),
        "El usuario ingresó a la ruta" + req.url + '\n'
        )
    next()
}

module.exports = userLogs