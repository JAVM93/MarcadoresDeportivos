const categoriaModel = require("../models/categoriaScheme")

const categoriaGuarda = async (req, res) => {
    console.log(req.body)
    //res.status(200).json({"msj": "Categoria Guardada"})
    try{
        const categoria = new categoriaModel(req.body)
        categoria.save()
        res.status(200).json({"msj": "Categoria Guardada"})

    }catch(error){
        console.log("Error Cat Model:" + error)
    }

}

const categoriaObtener = async (req, res) => {
    const id  = req.params.id
    console.log(id)
    try{
        const c = await categoriaModel.findOne({_id:id}) 
        res.status(200).json(c)
    }catch(error){
        if(error){
            console.log("Error categoriaObtener" + error)
            res.status(400).send("Error categoriaObtener"); 
        }
    }
    
}

const categoriaActualizar  = async (req,res) =>{
    console.log("put:" + req.body)
    const { id, nombre } = req.body;
    try{
        

        if(id == ''){
            res.status(400).send("Error actualizado la categoria"); 
        }
        if(nombre != ''){
            const categoria = {}
            categoria.nombre = nombre
            const rta = await categoriaModel.updateOne(
                { _id: id },
                { $set: categoria },
                { new: true }
            )
            console.log("cat actualizada")
            //res.status(200).send("Categoria ")
            res.status(200).json({ msj: "Categoria Actualizada con exito" })
        }
    }catch (error) {
            console.log("Error: "+error);
            res.status(400).send("Error actualizado la categoria");
    }
}
const categoriaEliminar = async (req,res) =>{
    console.log('del' + req.params.id)
    try{
        id = req.params.id
        if(id == ''){
            res.status(400).send("Error eliminando la categoria"); 
        }
        console.log("id" + id)
        const rta = await categoriaModel.deleteOne({_id  : id }) 
        console.log(rta)
        console.log("cat Eliminada")
        res.status(200).send("Categoria Eliminada con exito")
        
    }catch (error) {
            console.log("Error: "+error);
            res.status(400).send("Error Eliminando la categoria");
    }

}

const categoriaListar = async (req,res)=>{
    console.log("categorias....")
    try{
        const categorias = await categoriaModel.find()
        res.status(200).send(categorias)
    }catch(error){
        if(error){
            console.log("error categoriaListar: " + error)
            res.status(400).send("error categoriaListar: ")
        }
    }
}

module.exports ={
    categoriaGuarda,
    categoriaObtener,
    categoriaActualizar,
    categoriaEliminar,
    categoriaListar
}