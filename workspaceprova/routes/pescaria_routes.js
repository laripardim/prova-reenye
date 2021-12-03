const express = require('express')
const router = express.Router()

const pescaria_controll = require('../controll/pescaria_controll')
router.get('/pesca/pescaria', pescaria_controll.all)
router.get('/pesca/pescaria/:id', pescaria_controll.get_id)
router.post('/pesca/create', pescaria_controll.add_cidade)
router.delete('/pesca/delete/:id', pescaria_controll.delete_cidade)
router.put('pesca/update', pescaria_controll.update_cidade)

module.exports = router