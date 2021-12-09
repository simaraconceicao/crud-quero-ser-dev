const mongoose = require('mongoose')

const candidataSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  }, 
  linkedin: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('candidata', candidataSchema )