import { Products } from "../models/Products.js";


const NOT_FOUND = 'no se encontró el usuario'

export class ProductsServices {

    constructor() {
        this.model = new Products();
    }

    getProducts = async () => {
        const result = await this.model.getProducts();
        return result
    }

    getProductByName = async (nombre) => {
        const result = await this.model.getProductByName(nombre);
        return result === null ? NOT_FOUND : result;
    }

    getProductById = async (id) => {
        const result = await this.model.getProductById(id);
        return result === null ? NOT_FOUND : result;
    }

    delProduct = async (id) => {
        const result = await this.model.delProduct(id);
        const items = await this.getProducts();
        return { items, result };
    }
}