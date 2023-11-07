import { Clients } from "../domain/clients";
import { ClientsRepository } from "../domain/clientsRepository";
import ClientsModel from "./models/clientsModel";

export class PgsqlClientsRepository implements ClientsRepository {

    async createClients(name: string, last_name: string, email: string, password: string): Promise<Clients | null> {
        try {
            const createdClients = await ClientsModel.create({ name, last_name, email, password });
            return new Clients(createdClients.id, createdClients.name, createdClients.last_name, createdClients.email, createdClients.password);
        } catch (error) {
            console.error("Error in PgsqlClientsRepository:", error);
            return null;
        }
    }

    async getclients(): Promise<Clients[]> {
        try {
            const clients = await ClientsModel.findAll();
            return clients.map(client => new Clients(client.id, client.name, client.last_name, client.email, client.password));
        } catch (error) {
            console.error("Error in PgsqlClientsRepository:", error);
            return [];
        }
    }

    
}
