const express = require('express')
const router = express.Router()
const controller = require('../controllers/vagaController')


//listar todas as vagas
router.get('/', controller.getAll )

//criar uma nova vagas
router.post('/', controller.create)

//listar uma vagas
router.get('/:id', controller.getOne )

//atualizar uma informacao especifica numa vaga
router.patch('/:id', controller.updateOne)

//deletar uma vaga
router.delete('/:id', controller.deleteOne)

module.exports = router