import { Products } from "../domain/products";
import { ProductsRepository } from "../domain/productsRepository";

export class GetProductsUseCase {
    constructor(readonly productsRepository: ProductsRepository) {}

    async run(): Promise<Products[]> {
        return this.productsRepository.getProducts();
    }
}