const eventoModel = require("../models/eventoScheme")

const eventoGuarda = async (req, res) => {
    console.log("Evento Guardando")
    console.log(req.body)
    try{
        const evento = new eventoModel(req.body)
        evento.save()
        res.status(200).json({"msj": "evento Guardada"})

    }catch(error){
        console.log("Error Evento Model:" + error)
    }
    

}

const eventoObtener = async (req, res) => {
    const id  = req.params.id
    console.log(id)
    try{
        const c = await eventoModel.findOne({_id:id}) 
        res.status(200).json(c)
    }catch(error){
        if(error){
            console.log("Error eventoObtener" + error)
            res.status(400).send("Error eventoObtener"); 
        }
    }
    
}

const eventoActualizar  = async (req,res) =>{
    console.log("put:" + req.body)
    const { id, nombre } = req.body;
    try{
        

        if(id == ''){
            res.status(400).send("Error actualizado la evento"); 
        }
        if(nombre != ''){
            const evento = {}
            evento.nombre = nombre
            const rta = await eventoModel.updateOne(
                { _id: id },
                { $set: evento },
                { new: true }
            )
            console.log("cat actualizada")
            //res.status(200).send("evento ")
            res.status(200).json({ msj: "evento Actualizada con exito" })
        }
    }catch (error) {
            console.log("Error: "+error);
            res.status(400).send("Error actualizado la evento");
    }
}
const eventoEliminar = async (req,res) =>{
    console.log('del' + req.params.id)
    try{
        id = req.params.id
        if(id == ''){
            res.status(400).send("Error eliminando la evento"); 
        }
        console.log("id" + id)
        const rta = await eventoModel.deleteOne({_id  : id }) 
        console.log(rta)
        console.log("cat Eliminada")
        res.status(200).send("evento Eliminada con exito")
        
    }catch (error) {
            console.log("Error: "+error);
            res.status(400).send("Error Eliminando la evento");
    }

}

const eventoListar = async (req,res)=>{

    try{
        const eventos = await eventoModel.find()
        res.status(200).send(eventos)
    }catch(error){
        if(error){
            console.log("error eventoListar: " + error)
            res.status(400).send("error eventoListar: ")
        }
    }
    //res.status(200).send(listado)

}

module.exports ={
    eventoGuarda,
    eventoObtener,
    eventoActualizar,
    eventoEliminar,
    eventoListar
}