const sequelize = require("../config/Database");

const { DataTypes } = require("sequelize");

const Beneficio = sequelize.define("Beneficio", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    funcionarioId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valeAlimentacao: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false    
    },
    valeTransporte: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    planoSaude: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }

})

module.exports = Beneficio;