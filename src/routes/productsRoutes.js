import express from 'express';
import { ProductsControllers } from '../controllers/productsControllers.js';

// const controllers = new ProductsControllers();

export class ProductsRoutes {

    constructor() {

        this.router = express.Router();
        this.controller = new ProductsControllers();

        this.router
            .get('/', this.controller.getProducts)
            .get('/nombre/:nombre', this.controller.getProductByName)
            .get('/delete/:id', this.controller.delProduct)
            .get('/:id', this.controller.getProductById)
    }
}





