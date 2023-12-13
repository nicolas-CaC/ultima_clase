import { Model } from "sequelize";
import { ProductsSchema } from "./schema/ProductsSchema.js"

class ProductsModel extends Model { }

export class Products extends ProductsSchema {

    constructor() {
        super();
        this.products = ProductsModel;
        this.products.init(this.schema, this.config);
    }


    getProducts = async () => {
        const result = await this.products.findAll();
        const data = result.map(product => product.dataValues)
        return data
    }

    getProductByName = async (nombre) => {
        const result = await this.products.findOne({ where: { nombre } });
        return result;
    }

    getProductById = async (id) => {
        const result = await this.products.findOne({ where: { id } });
        return result;
    }

    delProduct = async (id) => {
        const result = await this.products.destroy({ where: { id } });
        return result;
    }
}