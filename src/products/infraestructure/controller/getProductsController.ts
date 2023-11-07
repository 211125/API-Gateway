import { Request, Response } from "express";
import { GetProductsUseCase } from "../../aplication/getProductsUseCase";

export class GetProductsController {
    constructor(readonly getProductsUseCase: GetProductsUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const products = await this.getProductsUseCase.run();
            res.status(200).send(products);
        } catch (error) {
            console.error("Error in GetProductsController:", error);
            res.status(500).send({
                status: "error",
                message: "Internal server error"
            });
        }
    }
}
