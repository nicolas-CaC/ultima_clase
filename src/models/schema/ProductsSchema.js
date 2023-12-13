import { INTEGER, STRING } from "sequelize";
import { MySQL, Postgres } from "../../config/connections/index.js";

export class ProductsSchema {

    constructor() {

        this.connection = this.getConnection();

        this.schema = {
            id: {
                type: INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nombre: { type: STRING },
            precio: { type: INTEGER }
        };

        this.config = {
            sequelize: this.connection.sequelize,
            modelName: 'productos',
            timestamps: false
        };
    }

    getConnection = () => {
        if (process.argv[2] === 'dev')
            return new MySQL();

        if (process.argv[2] === 'prod')
            return new Postgres();
    }
}