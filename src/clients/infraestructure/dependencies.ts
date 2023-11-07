import { PgsqlClientsRepository } from "./pgsqlClientsRepository";
import { CreateClientsUseCase } from "../aplication/createclientsUseCase";
import { CreateClientsController } from "./controller/createClientsController";

import { GetClientsUseCase } from "../aplication/getClientsUseCase";
import { GetClientsController } from "./controller/getClientsController";

export const pgsqlClientsRepository = new PgsqlClientsRepository();

export const createClientsUseCase = new CreateClientsUseCase(pgsqlClientsRepository);
export const createClientsController = new CreateClientsController(createClientsUseCase);

export const getClientsUseCase = new GetClientsUseCase(pgsqlClientsRepository);
export const getClientsController = new GetClientsController(getClientsUseCase);