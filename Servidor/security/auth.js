const jwt = require('jsonwebtoken')
module.exports = async (req,res,next)=>{
    const token = req.header('x-auth-token')

    if(!token){
        res.status(400).json( { msj : "Token no encontrado"  } )
    }

    try{
        const cifrado = jwt.verify(token, "palabra secreta")
        req.usuario = cifrado.usuario 
        console.log("token confirmado")
        next()
    }catch (error) {
        res.status(400).json({ msj: "Error no hay token"})
    
        
    }
}