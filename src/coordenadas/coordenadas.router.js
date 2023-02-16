const coordenadasServices = require("./coordenadas.services")

const express = require("express")

const router = express.Router()

router.get("/",coordenadasServices.getAllCoordenadas)
router.post("/",coordenadasServices.postCoordenadas)

module.exports = router
