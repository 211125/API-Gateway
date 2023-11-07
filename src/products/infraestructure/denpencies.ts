import { PgsqlProductsRepository } from "./pgsqlProductsRepository";
import { CreateProductsUseCase } from "../aplication/createProductsUseCase";
import { CreateProductsController } from "./controller/createProductsController";

import { GetProductsUseCase } from "../aplication/getProductsUseCase";
import { GetProductsController } from "./controller/getProductsController";

export const pgsqlProductsRepository = new PgsqlProductsRepository();

export const createProductsUseCase = new CreateProductsUseCase(pgsqlProductsRepository);
export const createProductsController = new CreateProductsController(createProductsUseCase);

export const getProductsUseCase = new GetProductsUseCase(pgsqlProductsRepository);
export const getProductsController = new GetProductsController(getProductsUseCase);