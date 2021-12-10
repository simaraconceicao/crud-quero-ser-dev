const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3333

//conectar o db
const db = require('./src/data/database')
db.connect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//usar a rota
const vagasRouter = require('./src/routes/vagas.routes')
const candidatasRouter = require('./src/routes/candidatas.routes')
app.use('/vagas', vagasRouter)
app.use('/candidatas', candidatasRouter)
app.use('/', express.static('README.md'))

app.listen(PORT, console.log(`Server is starting at ${PORT}`))