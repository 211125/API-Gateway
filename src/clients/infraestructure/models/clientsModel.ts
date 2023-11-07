import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
    tableName: 'clients',
    timestamps: true 
})
class ClientsModel extends Model {
    
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
        type: DataType.STRING(128),
        allowNull: false
    })
    public last_name!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public email!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public password!: string;

}

export default ClientsModel;
