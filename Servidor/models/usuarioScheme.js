const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema(
    {
        correo: {
            type : String,
            required : true,
            trim : true
        },
        nombre: {
            type : String,
            required : true,
            trim : true
        },
        contraseña: {
            type : String,
            required : true,
            trim : true
        },
        creado : {
            type : Date,
            default : Date.now()
        }
    }   
) 

module.exports = mongoose.model("usuario", usuarioSchema)