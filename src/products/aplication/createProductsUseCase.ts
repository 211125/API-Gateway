
import { Products } from "../domain/products";
import { ProductsRepository } from "../domain/productsRepository";

export class CreateProductsUseCase {
    constructor(readonly productsRepository: ProductsRepository) {}

    async run(name: string, stock: number, price: number): Promise<Products | null> {
        try {

            const createdProducts = await this.productsRepository.createProducts(name, stock, price);
            return createdProducts;
        } catch (error) {
            console.error("Error in CreateClientsUseCase:", error);
            return null;
        }
    }
}