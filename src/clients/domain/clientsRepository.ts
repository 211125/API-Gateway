import { Clients } from "./clients";

export interface ClientsRepository {
    createClients(name: string, last_name: string, email: string, password: string): Promise<Clients | null>;
    getclients(): Promise<Clients[]>;
}