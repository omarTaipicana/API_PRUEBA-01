require("dotenv").config()

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        development: {
            dialect: "postgres",
            host: "localhost",
            username: "postgres",
            password: "root",
            port: 5432,
            database: "coordenadas-db",
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true,
            }
        },
        production: {
            dialect: "postgres",
            hostname: "dpg-cfn49mqrrk0eqlu79jt0-a",
            port: 5432,
            username: "prueba_cfek_user",
            password: "QZwZdKqRJ33997KbwG9eDiAisn5BqF2X",
            database: "prueba_cfek",
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            }
            // ,
            // dialectOptions: {
            //     ssl: {
            //         require: true,
            //         rejectUnauthorized: false
            //     }
            // }
        }

    }
}

module.exports = configs