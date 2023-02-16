const coordenadasControllers = require("./coordenadas.controller")
const responseHandlres = require("../utils/handleResponses")


const getAllCoordenadas = (req,res)=>{
    coordenadasControllers.findAllCoordenadas()
    .then(data => {
        responseHandlres.success({
            res,
            data,
            status: 200,
            message: 'Coordenadas obtenidas',
            data: data
        })
    })
    .catch(error => {
        responseHandlres.error({
            res,
            data: error,
            status: 400,
            message: 'no encontrado',
        })
    })
}

const postCoordenadas = (req,res)=>{
    const coordenadasObj = req.body
    coordenadasControllers.createNewCoordenadas(coordenadasObj)
    .then(data => {
        responseHandlres.success({
            res,
            data,
            status: 200,
            message: 'Coordenadas registradas correctamente',
            data: data
        })
    })
    .catch(error => {
        responseHandlres.error({
            res,
            data: error,
            status: 400,
            message: 'ingrese todos los campos',
            fields: {
                name: "Fernando",
                ipv6:"192.168.0.1",
                ipv4: "1050:0:0:0:5:600:300c:326b",
                latitud: "-1.29372920",
                longitud: "-79.56789"
            }
        })
    })
}

module.exports ={
    postCoordenadas,
    getAllCoordenadas
}