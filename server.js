const express = require('express')
const app = express()

//conectar o db
const db = require('./src/data/database')
db.connect()

app.use(express.json())

//usar a rota
const vagasRouter = require('./src/routes/vagas.routes')
app.use('/vagas', vagasRouter)

const candidatasRouter = require('./src/routes/candidatas.routes')
app.use('/candidatas', candidatasRouter)


app.listen(PORT, console.log(`Server is starting at ${PORT}`))