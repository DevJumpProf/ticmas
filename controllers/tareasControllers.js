const tareasModel = require ("../models/tareasModel.js")

const traerTodasTareas = async (req,res)=>{
    try {
        const tareas = await tareasModel.findAll()
        res.json(tareas)
    } catch (error) {
        res.json({message:error.message})

    }
}

    const traerTarea = async(req,res)=>{
        try {
            const tarea = await tareasModel.findByPk(req.params.id)
            res.json(tarea)
        } catch (error) {
            res.json({message:error.message})
        }
    }

    const crearTarea = async (req,res)=>{
        try {
            await tareasModel.create(req.body)
            res.json({
                "message":"tarea creada correctamente"
            })
        } catch (error) {
            res.json({message:error.message})
        }
    }
        const actualizarTarea = async (req,res)=>{
            try {
                await tareasModel.update(req.body,{
                    where:{id:req.params.id}
                })
                res.json({
                    "message":"tarea editada correctamente"
                })
            } catch (error) {
                res.json({message:error.message})
            }
        }
    
        const eliminarTarea = async(req,res) =>{
            try {
                await tareasModel.destroy ({
                    where:{id:req.params.id}
                })
                res.json({
                    "message":"tarea eliminada correctamente"
                })
            } catch (error) {
                res.json({message:error.message})
            }
        }


module.exports = {traerTodasTareas,traerTarea,crearTarea,actualizarTarea,eliminarTarea}