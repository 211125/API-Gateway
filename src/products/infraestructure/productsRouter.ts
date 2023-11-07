import express from "express";
import { createProductsController, getProductsController } from "./denpencies";

export const productsRouter = express.Router();



// Ruta para agregar un nuevo usuario
productsRouter.post(
    "/create",
    createProductsController.run.bind(createProductsController)
);


// Ruta para obtener todos los usuarios
productsRouter.get(
    "/",
    getProductsController.run.bind(getProductsController)
);



