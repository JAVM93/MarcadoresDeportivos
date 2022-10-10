const express = require('express')
const router = express.Router()
const categoriasCtrl = require('../controllers/categoriasCtrl')

function print(){
    console.log("categoria")
}

router.post('/',      categoriasCtrl.categoriaGuarda  );
router.get('/',    categoriasCtrl.categoriaListar  );
router.get('/:id',    categoriasCtrl.categoriaObtener);
router.put('/',       categoriasCtrl.categoriaActualizar)
router.delete('/:id', categoriasCtrl.categoriaEliminar)
module.exports = router


// Equipos{

//   Get,post, put, delete, get/:id
//   }
  