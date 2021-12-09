const mongoose = require('mongoose')
require('dotenv').config()


const connect =  () => {mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
).then(console.log('Database connected')).catch(err => console.err)}

module.exports = { connect }