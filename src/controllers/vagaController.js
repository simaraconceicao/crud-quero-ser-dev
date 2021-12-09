const mongoose = require('mongoose')
const Vaga = require('../models/vaga')

const getAll = async (req, res) => {
  const vagas = await Vaga.find()
  res.json(vagas)
}

const create =  async (req,res) => {

  const vaga = new Vaga({
    _id:  new mongoose.Types.ObjectId(),
    salario: req.body.salario,
    link: req.body.link,
    empresa: req.body.empresa,
    nome: req.body.nome,
    criadoEm: req.body.criadoEm
  })
  
  const vagaJaExiste = await Vaga.findOne({nome: req.body.nome})

  if (vagaJaExiste) {
    return res.status(400).json({error: 'Vaga já cadastrada.'})
  }

  try { 
    const novaVaga = await vaga.save()
    res.status(201).json(novaVaga)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getOne = async (req, res) => {
  try {
    const vaga = await Vaga.findById(req.params.id)
    if(vaga == null) {
      return res.status(404).json({message: 'vaga não encontrada'})
    }
    res.json(vaga)
  } catch (error) {
    res.status(500).json({ message: error.message })

  }
}

const updateOne = async (req, res) => {
  try {
    const vaga = await Vaga.findById(req.params.id)
    if(vaga == null) {
      return res.status(404).json({message: 'vaga não encontrada'})
    }
    
    if (req.body.salario != null) {
      vaga.salario = req.body.salario
    }

    if (req.body.link != null) {
      vaga.link = req.body.link
    }

    if (req.body.empresa != null) {
      vaga.empresa = req.body.empresa
    }

    if (req.body.nome != null) {
      vaga.nome = req.body.nome
    }

    if (req.body.criadoEm != null) {
      vaga.criadoEm = req.body.criadoEm
    }
    
    const vagaAtualizada = await vaga.save()
    res.json(vagaAtualizada)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteOne = async (req, res) => {
  try{    
    const vaga = await Vaga.findById(req.params.id)
    if(vaga == null) {
      return res.status(404).json({message: 'vaga não encontrada.'})
    }

    await vaga.remove()
    res.json({ message: 'vaga deletada com sucesso!'})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAll,
  create,
  getOne,
  updateOne,
  deleteOne
}