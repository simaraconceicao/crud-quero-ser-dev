const mongoose = require('mongoose')

const connect =  () => {mongoose.connect('mongodb+srv://queroserdev:Aram1s@qsd.cq20e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
).then(console.log('Database connected')).catch(err => console.err)}

module.exports = { connect }