import { Products } from "../domain/products";
import { ProductsRepository } from "../domain/productsRepository";
import ProductsModel from "./models/ProductsModel";

export class PgsqlProductsRepository implements ProductsRepository {

    async createProducts(name: string, stock: number, price: number): Promise<Products | null> {
        try {
            const createdProducts = await ProductsModel.create({ name, stock, price});
            return new Products(createdProducts.id, createdProducts.name, createdProducts.stock, createdProducts.price, );
        } catch (error) {
            console.error("Error in PgsqlClientsRepository:", error);
            return null;
        }
    }

    async getProducts(): Promise<Products[]> {
      try {
            const products = await ProductsModel.findAll();
            return products.map(products => new Products(products.id, products.name, products.stock, products.price));
        } catch (error) {
            console.error("Error in PgsqlClientsRepository:", error);
            return [];
        }
    }

    
}
