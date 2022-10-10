const mongoose = require('mongoose')

const eventoSchema = mongoose.Schema(
    {
        rival1: {
            type : String,
            required : true,
            trim : true
        },
        rival2: {
            type : String,
            required : true,
            trim : true
        },
        categoria: {
            type : String,
            required : true,
            trim : true
        },
        goles1: {
            type : String,
            required : true,
            trim : true
        },
        goles2: {
            type : String,
            required : true,
            trim : true
        },
        fecha: {
            type : Date
        },
        creado : {
            type : Date,
            default : Date.now()
        }
    }   
) 

module.exports = mongoose.model("evento", eventoSchema)