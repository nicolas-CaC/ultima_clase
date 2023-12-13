import { ProductsServices } from "../services/productsServices.js";

const title = 'PRODUCTOS'

export class ProductsControllers {

    constructor() {
        this.services = new ProductsServices();
    }

    getProducts = async (_, res) => {
        const items = await this.services.getProducts();
        res.render('products', { title, items });
    }

    getProductByName = async (req, res) => {
        const result = await this.services.getProductByName(req.params.nombre);
        res.send(result);
    }

    getProductById = async (req, res) => {
        const result = await this.services.getProductById(req.params.id);
        res.send(result);
    }

    delProduct = async (req, res) => {
        const { items, result } = await this.services.delProduct(req.params.id);
        res.render('delProduct', { title, result, items });
    }
}