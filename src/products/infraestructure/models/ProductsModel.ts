import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'products',
    timestamps: true // Set to false if you don't want the createdAt and updatedAt columns
})
class ProductsModel extends Model {
    
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;
    
    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public name!: string;

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
    })
    public stock!: number;

    @Column({
        type: DataType.DECIMAL(10, 2), // Assuming price has two decimal points
        allowNull: false
    })
    public price!: number;
    
    // You can add additional columns as needed

}

export default ProductsModel;
