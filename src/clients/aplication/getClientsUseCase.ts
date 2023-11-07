import { ClientsRepository } from "../domain/clientsRepository";
import { Clients } from "../domain/clients";

export class GetClientsUseCase {
    constructor(readonly clientsRepository: ClientsRepository) {}

    async run(): Promise<Clients[]> {
        return this.clientsRepository.getclients();
    }
}