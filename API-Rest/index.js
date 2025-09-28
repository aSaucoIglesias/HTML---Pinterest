require("dotenv").config();

const express = require('express')
const { connectDB } = require("./src/config/db")

const app = express()
const port = 3001

// conectar con la bbdd
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/saludar", (req, res, next) => {
    return res.status(200).json("Ey! te saludo, esto funciona")
})

app.listen(port, () => {
    console.log(`Servidor levantado en: http://localhost:${port}`)
})
