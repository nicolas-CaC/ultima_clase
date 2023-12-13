import { Sequelize } from 'sequelize'

export class Postgres {

    constructor() {
        this.sequelize = new Sequelize({
            dialect: 'postgres',
            host: 'localhost',
            database: 'node_23575',
            username: 'root',
            password: '',
            port: 3306,
            pool: { max: 10, min: 0 }
        })

        this.sequelize.authenticate()
            .then(() => console.log('se conectó bien'))
            .catch((err) => console.log('no se pudo conectar:', err))
    }
}
