const express = require("express")
const coordenadasRouter = require("./coordenadas/coordenadas.router")
const usersRouter = require("./users/users.router")
const app = express()
app.use(express.json())
const db = require("./utils/database")
const responseHandlres = require("./utils/handleResponses")
app.use("/api/v1/coordenadas",coordenadasRouter)
app.use("/api/v1/users",usersRouter)



const cors = require('cors');
app.use(cors({ origin: 'http://127.0.0.1:5173'}))



db.authenticate()
    .then(() => {
        console.log("las credenciales son correctas")
    })
    .catch((error) => {
        console.log(error)
    })
db.sync()
    .then(() => {
        console.log("la base de datos se sincronizo")
    })
    .catch((error) => {
        console.log(error)
    })

    app.get("/", (req, res) => {
        responseHandlres.success({
            res,
            message: "servidor inicializado correctamente",
            status: 200,
            data: {
                "users": "http://localhost:9000/api/v1/users",
                "coordenadas": "http://localhost:9000/api/v1/coordenadas"
            }
        })
    })

app.listen("9000",()=>{
    console.log("server ok")
})