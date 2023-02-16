const usersServices = require("./users.services")

const express = require("express")
const router = express.Router()


router.get("/",usersServices.getAllUsers)
router.post("/",usersServices.postUser)
router.get("/:id",usersServices.getUserById)
router.patch("/:id",usersServices.patchUser)
router.delete("/:id",usersServices.deleteUser)


module.exports = router