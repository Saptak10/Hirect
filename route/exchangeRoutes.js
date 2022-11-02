const express = require('express')
const router = express.Router();

const { getExchange } = require('../controller/exchangeController')
  
router.get('/', getExchange)

module.exports = router;