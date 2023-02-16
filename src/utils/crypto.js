const bcrypy = require("bcrypt")

const hashPaswoord = (plainPassword) => {
    return bcrypy.hashSync(plainPassword, 10)
}

//Retorna un booleano 
const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypy.compareSync(plainPassword, hashedPassword)
}

module.exports = {
    hashPaswoord,
    comparePassword
}