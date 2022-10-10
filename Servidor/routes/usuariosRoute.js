const express = require('express')
const router = express.Router()
const usuariosCtrl = require('../controllers/usuariosCtrl')

router.post('/',     usuariosCtrl.userSave );
router.get('/',   usuariosCtrl.userList);
router.get('/:id',   usuariosCtrl.userObtain);
router.put('/',      usuariosCtrl.userUpdate)
router.delete('/:id',usuariosCtrl.userDelete)

module.exports = router