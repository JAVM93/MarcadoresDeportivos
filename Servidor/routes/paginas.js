const express = require('express')
const router = express.Router()
const auth = require('../security/auth')
router.get('/', function(req, res) {
    res.send('Acerca de esta wiki');
  });


module.exports = router