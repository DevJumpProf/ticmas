const express = require ("express")
const router = express.Router()

const {traerTodasTareas,traerTarea,crearTarea,actualizarTarea,eliminarTarea} = require ("../controllers/tareasControllers.js")

router.get ("/",traerTodasTareas)
router.get("/:id",traerTarea)
router.post("/",crearTarea)
router.put("/:id",actualizarTarea)
router.delete("/:id",eliminarTarea)

module.exports = router