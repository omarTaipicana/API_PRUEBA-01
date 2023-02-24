const {Sequelize} = require("sequelize")

const config = require("../../config")

const db = new Sequelize(config.db[config.api.nodeEnv])


// const { Client } = require('pg')
// const db = new Client({connectionString: process.env.DATABASE_URL})

// await client.connect()
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()

module.exports = db