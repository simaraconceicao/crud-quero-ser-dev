const mongoose = require('mongoose')

const vagaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  salario: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }, 
  empresa: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('vaga', vagaSchema )