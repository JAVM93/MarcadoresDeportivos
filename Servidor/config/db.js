const mongoose = require("mongoose")
const DB_URI = 'mongodb://0.0.0.0:27017/ProyectoMINTIC'

module.exports = () =>{
  const   conn  = () => {
    console.log("conectando...")
    mongoose.connect(
        DB_URI,
        {
            keepAlive : true,
            useNewUrlParser : true,
            useUnifiedTopology : true
        },
        (err) =>{
            if(err){
                console.log("error DB:" + err )
            }else{
                console.log("Conexion Satisfactoria")
            }
        }
    )
  }
  conn()
}