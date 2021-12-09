const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 3333

app.use(morgan('tiny'))

//conectar o db
const db = require('./src/data/database')
db.connect()

app.use(express.json())

//usar a rota
const vagasRouter = require('./src/routes/vagas.routes')
const candidatasRouter = require('./src/routes/candidatas.routes')
app.use('/vagas', vagasRouter)
app.use('/candidatas', candidatasRouter)

if (process.env.NODE_ENV === 'production') {
  app.use('/')
}
app.listen(PORT, console.log(`Server is starting at ${PORT}`))