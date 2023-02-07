const { DataTypes } = require("sequelize")

const db = require("../utils/databse")

const Coordenadas = db.define("coordenadas", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "SIN DATO"
    },
    ipv6: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "SIN DATO"
    },
    ipv4: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "SIN DATO"
    },
    latitud: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    longitud: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }

})


module.exports = Coordenadas