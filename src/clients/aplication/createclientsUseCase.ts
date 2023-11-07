import { Clients } from "../domain/clients";
import { ClientsRepository } from "../domain/clientsRepository";
import bcrypt from 'bcrypt';

export class CreateClientsUseCase {
    constructor(readonly clientsRepository: ClientsRepository) {}

    async run(name: string, last_name: string, email: string, password: string): Promise<Clients | null> {
        try {
            // Hash the password before storing it in the database
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Pass the hashed password instead of the plain password
            const createdClients = await this.clientsRepository.createClients(name, last_name, email, hashedPassword);
            return createdClients;
        } catch (error) {
            console.error("Error in CreateClientsUseCase:", error);
            return null;
        }
    }
}