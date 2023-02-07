const {Sequelize} = require("sequelize")

const config = require("../../config")

const db = new Sequelize(config.db.developent)

module.exports = db

