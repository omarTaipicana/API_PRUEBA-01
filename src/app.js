const express = require("express")
const Coordenadasrouter = require("./coordenadas/coordenadas.router")
const app = express()
app.use(express.json())
const db = require("./utils/databse")
app.use("/",Coordenadasrouter)


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


app.get("/",(req,res)=>{
    res.json({
        message:"hola"
    })
})

app.listen("9000",()=>{
    console.log("server ok")
})