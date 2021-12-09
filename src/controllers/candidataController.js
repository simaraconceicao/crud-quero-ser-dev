const mongoose = require('mongoose')
const Candidata = require('../models/candidata')

const getAll = async (req, res) => {
  const candidatas = await Candidata.find()
  res.json(candidatas)
}

const create =  async (req,res) => {

  const candidata = new Candidata({
    _id:  new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    github: req.body.github,
    linkedin: req.body.linkedin,
    criadoEm: req.body.criadoEm
  })
  
  const candidataJaExiste = await Candidata.findOne({nome: req.body.nome})

  if (candidataJaExiste) {
    return res.status(400).json({error: 'Candidata já cadastrada.'})
  }

  try { 
    const novaCandidata = await candidata.save()
    res.status(201).json(novaCandidata)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getOne = async (req, res) => {
  try {
    const candidata = await Candidata.findById(req.params.id)
    if(candidata == null) {
      return res.status(404).json({message: 'candidata não encontrada'})
    }
    res.json(candidata)
  } catch (error) {
    res.status(500).json({ message: error.message })

  }
}

const updateOne = async (req, res) => {
  try {
    const candidata = await Candidata.findById(req.params.id)
    if(candidata == null) {
      return res.status(404).json({message: 'candidata não encontrada'})
    }
    
    if (req.body.nome != null) {
      candidata.nome = req.body.nome
    }

    if (req.body.github != null) {
      candidata.github = req.body.github
    }

    if (req.body.linkedin != null) {
      candidata.linkedin = req.body.linkedin
    }

    if (req.body.criadoEm != null) {
      candidata.criadoEm = req.body.criadoEm
    }
    
    const candidataAtualizada = await candidata.save()
    res.json(candidataAtualizada)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteOne = async (req, res) => {
  try{    
    const candidata = await Candidata.findById(req.params.id)
    if(candidata == null) {
      return res.status(404).json({message: 'candidata não encontrada.'})
    }

    await candidata.remove()
    res.json({ message: 'candidata deletada com sucesso!'})
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