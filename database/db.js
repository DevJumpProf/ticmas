const {Sequelize} = require ("sequelize")

const db = new Sequelize ("tareas_ticmas","root","",{
    host:"localhost",
    dialect:"mysql",
    port:3306
})

module.exports = db