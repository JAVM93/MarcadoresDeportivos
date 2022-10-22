const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema(
    {
        nombre :{
            type: String,
            required : true,
            trim : true
        },
        correo : {
            type: String,
            required: true,
            trim : true
        },
        contrasena : {
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