import { Request, Response } from "express";
import { GetClientsUseCase } from "../../aplication/getClientsUseCase";

export class GetClientsController {
    constructor(readonly getClientsUseCase: GetClientsUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const clients = await this.getClientsUseCase.run();
            res.status(200).send(clients);
        } catch (error) {
            console.error("Error in GetClientsController:", error);
            res.status(500).send({
                status: "error",
                message: "Internal server error"
            });
        }
    }
}
