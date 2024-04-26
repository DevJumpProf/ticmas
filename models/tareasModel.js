const db = require ("../database/db.js")
const {DataTypes} = require ("sequelize")

const tareasModel=db.define("tareas",{
    titulo: {type:DataTypes.STRING},
    descripcion: {type:DataTypes.STRING},
    estado: {type:DataTypes.STRING},
});

module.exports = tareasModel