import express, { json } from "express";
import CartManager from "./CartManager.js";

const app = express();

app.use(express.json());

const cartManager = new CartManager();

app.get('/api/products/', (req, res) => {

});

app.get('/api/pruducts/:pid', (req, res) => {

});

app.post('/api/products', (req, res) => {

});

app.put('/api/products/:pid', (req, res) => {

});

app.delete('/api/products/:pid', (req, res) => {

})

//--------------rutas carts

app.post('/api/carts', async (req, res) => {
    const carts = await cartManager.addCart();
    res.status(201).json({ carts, message: "Nuevo carrito creado"});

});

app.get('/api/carts/:cid', async (req, res) => {
    const cid = req.params.cid;
    const products = await cartManager.getProductsInCartById(cid);
    res.status(200).json({ products, message: "Lista de productos" })
});

app.post('/api/carts/:cid/products/:pid', async (req, res) => {
    const cid = req.params.cid;
    const pid = parseInt(req.params.pid);
    // const { cid, pid } = req.params;
    const quantity = req.body.quantity;

    const carts = await cartManager.addProductInCart(cid, pid, quantity);
    res.status(200),json({ carts, message: "Nuevo producto añadido"});

});

app.listen(8080, () => {
    console.log("Servidor iniciado en el puerto 8080");
});
