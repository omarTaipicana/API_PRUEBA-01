const Coordenadas = require("../models/coordenadas.model")

const findAllCoordenadas = async ()=>{
    const data = Coordenadas.findAll()
    return data
}


const createNewCoordenadas = async (coordenadasObj) => {
    const newCoordenadas = {
        name: coordenadasObj.name,
        ipv6: coordenadasObj.ipv6,
        ipv4: coordenadasObj.ipv4,
        latitud: coordenadasObj.latitud,
        longitud: coordenadasObj.longitud
    }
    const data = await Coordenadas.create(newCoordenadas)
    return data
}

module.exports = {
    createNewCoordenadas,
    findAllCoordenadas
}