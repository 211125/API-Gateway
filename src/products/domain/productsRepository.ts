import { Products } from "./products";

export interface ProductsRepository {
    createProducts(name: string, stock: number, price: number): Promise<Products | null>;
    getProducts(): Promise<Products[]>;
}