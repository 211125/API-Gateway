import { Request, Response } from "express";
import { CreateProductsUseCase } from "../../aplication/createProductsUseCase";

export class CreateProductsController {
    constructor(readonly createProducts: CreateProductsUseCase) { }

    async run(req: Request, res: Response) {
        const { name, stock, price} = req.body;

        try {
            const createdProducts = await this.createProducts.run(name, stock, price);

            if (createdProducts) {
                return res.status(201).send({
                    status: "success",
                    data: createdProducts,
                    message: "Products created successfully"
                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    message: "Error creating new client, please try again later"
                });
            }
        } catch (error) {
            console.error("Error in CreateProductsController:", error);
            res.status(500).send({
                status: "error",
                message: "Internal server error"
            });
        }
    }
}
