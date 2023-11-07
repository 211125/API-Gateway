import { Request, Response } from "express";
import { CreateClientsUseCase } from "../../aplication/createclientsUseCase";

export class CreateClientsController {
    constructor(readonly createClients: CreateClientsUseCase) { }

    async run(req: Request, res: Response) {
        const { name, last_name, email, password } = req.body;

        try {
            const createdClient = await this.createClients.run(name, last_name, email, password);

            if (createdClient) {
                return res.status(201).send({
                    status: "success",
                    data: createdClient,
                    message: "Client created successfully"
                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    message: "Error creating new client, please try again later"
                });
            }
        } catch (error) {
            console.error("Error in CreateClientsController:", error);
            res.status(500).send({
                status: "error",
                message: "Internal server error"
            });
        }
    }
}
