const equipoModel = require("../models/equipoScheme")
const { validationResult } = require('express-validator')


const equipoGuarda = async (req, res) => {
    console.log(req.body)
    try{
        const categoria = new equipoModel(req.body)
        categoria.save()
        res.status(200).json({"msj": "Equipo Guardado"})

    }catch(error){
        console.log("Error Equ Model:" + error)
    }
}


const equipoListar = async (req,res)=>{
    try{
        const equipos = await equipoModel.find()
        res.status(200).send(equipos)
    }catch(error){
        if(error){
            console.log("error equipoListar: " + error)
            //res.status(400).send("error equipoListar: ")
        }
    }
}

const equipoObtener = async (req, res) => {
    const id  = req.params.id
    console.log(id)
    try{
        const c = await equipoModel.findOne({_id:id}) 
        res.status(200).json(c)
    }catch(error){
        if(error){
            console.log("Error equipoObtener" + error)
            res.status(400).send("Error equipoObtener"); 
        }
    }
    
}

const equipoActualizar  = async (req,res) =>{
    console.log("put:" + req.body)
    const { id, nombre } = req.body;
    try{
        

        if(id == ''){
            res.status(400).send("Error actualizado la equipo"); 
        }
        if(nombre != ''){
            const equipo = {}
            equipo.nombre = nombre
            const rta = await equipoModel.updateOne(
                { _id: id },
                { $set: equipo },
                { new: true }
            )
            console.log("Equipo actualizado")
            //res.status(200).send("equipo ")
            res.status(200).json({ msj: "equipo Actualizado con exito" })
        }
    }catch (error) {
            console.log("Error: "+error);
            res.status(400).send("Error actualizando el equipo");
    }
}
const equipoEliminar = async (req,res) =>{
    console.log('del' + req.params.id)
    try{
        id = req.params.id
        if(id == ''){
            res.status(400).send("Error eliminando el equipo"); 
        }
        console.log("id" + id)
        const rta = await equipoModel.deleteOne({_id  : id }) 
        console.log(rta)
        console.log("cat Eliminada")
        res.status(200).send("equipo Eliminado con exito")
        
    }catch (error) {
            console.log("Error: "+error);
            res.status(400).send("Error Eliminando el equipo");
    }

}

module.exports = {
    equipoListar,
    equipoGuarda,
    equipoObtener,
    equipoActualizar,
    equipoEliminar
} 