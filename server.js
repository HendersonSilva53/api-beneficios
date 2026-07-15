require("dotenv").config()

const app = require("./app")

const sequelize = require("./config/database")

const PORT = 3001

app.listen(PORT, ()=>{
    console.log("Microservico rodando na porta 3001")
})