const coordenadasServices = require("./coordenadas.services")

const express = require("express")

const router = express.Router()

router.get("/api/v1/coordenadas",coordenadasServices.getAllCoordenadas)
router.post("/api/v1/coordenadas",coordenadasServices.patchCoordenadas)

module.exports = router
