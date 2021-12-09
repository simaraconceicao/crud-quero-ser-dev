const express = require('express')
const router = express.Router()
const controller = require('../controllers/candidataController')


//listar todas as candidatas
router.get('/', controller.getAll )

//criar uma nova candidata
router.post('/', controller.create)

//listar uma candidata
router.get('/:id', controller.getOne )

//atualizar uma informacao especifica numa candidata
router.patch('/:id', controller.updateOne)

//deletar uma candidata
router.delete('/:id', controller.deleteOne)

module.exports = router