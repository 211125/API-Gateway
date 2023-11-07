import express from "express";
import { createClientsController, getClientsController } from "./dependencies";

export const clientsRouter = express.Router();



// Ruta para agregar un nuevo usuario
clientsRouter.post(
    "/create",
    createClientsController.run.bind(createClientsController)
);


// Ruta para obtener todos los usuarios
clientsRouter.get(
    "/",
    getClientsController.run.bind(getClientsController)
);



