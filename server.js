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


app.listen(3333, ()=> console.log('Server listening on port 3333'))