const express = require("express")
const cors = require("cors")

const tareasRoutes = require ("./routes/tareasRoutes")

const db = require ("./database/db.js")

const app=express()
const port = process.env.PORT 

app.use(cors())
app.use(express.json())

app.use("/tareas",tareasRoutes)

const conexionDB= async()=>{
    try {
        await db.authenticate()
        console.log("conectado ok a la DB");
    } catch (error) {
console.log(`error : ${error}`)
}
}

app.listen(port,()=>{
    conexionDB()
    console.log(`conexion ok en e puerto ${port}`);
})