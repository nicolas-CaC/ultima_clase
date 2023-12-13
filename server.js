import express from 'express';
import { ProductsRoutes } from './src/routes/productsRoutes.js';
import { resolve } from 'path';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');;
app.set('views', resolve() + '/src/views');

const productsRoutes = new ProductsRoutes();

// Middleware
app.use('/products', productsRoutes.router)

// Compruebo si toma bien los args del package.json
// console.log(process.argv[2])

app.listen(PORT, function () { console.log(`http://localhost:${PORT}`) })
