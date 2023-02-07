const coordenadasControllers = require("./coordenadas.controller")


const getAllCoordenadas = (req,res)=>{
    coordenadasControllers.findAllCoordenadas()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

const patchCoordenadas = (req,res)=>{
    const coordenadasObj = req.body
    coordenadasControllers.createNewCoordenadas(coordenadasObj)
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

module.exports ={
    patchCoordenadas,
    getAllCoordenadas
}