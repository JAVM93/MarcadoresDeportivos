const mongoose = require("mongoose")
//const DB_URI = 'mongodb://0.0.0.0:27017/ProyectoMINTIC'
DB_URI = 'mongodb+srv://alejandro:Javasquez26@cluster0.e8jx04u.mongodb.net/?retryWrites=true&w=majority'
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