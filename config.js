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
            hostname: "prueba01-db.internal",
            port: 5432,
            username: "postgres",
            password: "ug2OeUhDTS1jjiE",
            database: "prueba01-db",
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            }
            ,
            // dialectOptions: {
            //     ssl: {
            //         require: true,
            //         rejectUnauthorized: false
            //     }
            // }

//             Postgres cluster prueba01-db created
//   Username:    postgres
//   Password:    ug2OeUhDTS1jjiE
//   Hostname:    prueba01-db.internal
//   Flycast:     fdaa:1:71e0:0:1::2
//   Proxy port:  5432
//   Postgres port:  5433
//   Connection string: postgres://postgres:ug2OeUhDTS1jjiE@[fdaa:1:71e0:0:1::2]:5432

        }

    }
}

module.exports = configs