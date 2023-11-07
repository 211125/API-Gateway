import { Sequelize } from 'sequelize-typescript';
import ClientsModel from '../clients/infraestructure/models/clientsModel';
import ProductsModel from '../products/infraestructure/models/ProductsModel';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'postgres',
    username: 'angelito',
    password: '211125',
    models: [ClientsModel , ProductsModel],
});

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        await sequelize.sync({ force: false });
    } catch (err) {
        console.error('No se pudo conectar a la base de datos:', err);
        process.exit(1);  // Cierra la aplicación si hay un error de conexión
    }
}