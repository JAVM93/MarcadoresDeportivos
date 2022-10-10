const userModel = require("../models/usuarioScheme")

const userSave = async (req, res) => {
    console.log("usuario Guardando")
    console.log(req.body)
    try{
        const usuario = new userModel(req.body)
        usuario.save()
        res.status(200).json({"msj": "Usuario Guardado"})

    }catch(error){
        console.log("Error usuario Model:" + error)
    }
    

}

const userObtain = async (req, res) => {
    const id  = req.params.id
    console.log(id)
    try{
        const c = await userModel.findOne({_id:id}) 
        res.status(200).json(c)
    }catch(error){
        if(error){
            console.log("Error userObtain" + error)
            res.status(400).send("Error userObtain"); 
        }
    }
    
}

const userUpdate  = async (req,res) =>{
    console.log("put:" + req.body)
    const { id, nombre } = req.body;
    try{
        if(id == ''){
            res.status(400).send("Error actualizando el Usuario"); 
        }
        if(nombre != ''){
            const usuario = {}
            usuario.nombre = nombre
            const rta = await userModel.updateOne(
                { _id: id },
                { $set: usuario },
                { new: true }
            )
            console.log("User Create")
            //res.status(200).send("usuario ")
            res.status(200).json({ msj: "User Successfully Created" })
        }
    }catch (error) {
            console.log("Error: "+error);
            res.status(400).send("Error actualizado la usuario");
    }
}
const userDelete = async (req,res) =>{
    console.log('del' + req.params.id)
    try{
        id = req.params.id
        if(id == ''){
            res.status(400).send("Error eliminando la usuario"); 
        }
        console.log("id" + id)
        const rta = await userModel.deleteOne({_id  : id }) 
        console.log(rta)
        console.log("user Eliminado")
        res.status(200).send("Usuario Eliminado con exito")
        
    }catch (error) {
            console.log("Error: "+error);
            res.status(400).send("Error Eliminando el usuario");
    }

}

const userList = async (req,res)=>{

    try{
        const usuario = await userModel.find()
        res.status(200).send(usuario)
    }catch(error){
        if(error){
            console.log("error en userList: " + error)
            res.status(400).send("error en userList: ")
        }
    }
    //res.status(200).send(listado)

}

module.exports ={
    userSave,
    userObtain,
    userUpdate,
    userDelete,
    userList
}