const express = require('express')
const router = express.Router()
const equiposCtrl = require('../controllers/equiposCtrl')
const {check } = require('express-validator')

const multer = require('multer')
//const upload =  multer({dest : 'uploads/' })
const upload =  multer({dest : 'public/images/' })
const fs = require('node:fs')

router.get('/', equiposCtrl.equipoListar);

router.post('/',
   [ 
    check("nombre", "Nombre Obligatorio").not().isEmpty(),
    check("nombre","Longitud de equipo no validad").isLength({ min:6})
       ],

   equiposCtrl.equipoGuarda
  )

router.put('/imagen/:id',upload.single('imagen'), async(req,res)=>{
   const imagen = req.file
   console.log("recibiendo imagen")
   console.log(imagen.mimetype)
   console.log("archivo subido como: " + imagen.filename)
   const id  = req.params.id
   fs.rename('./public/images/' + imagen.filename, './public/images/' + id + ".jpg", ()=>{  console.log("cambio realizado")}) 
   res.status(200).json({"msj": "imagen Guardada"})
   }
   )

module.exports = router