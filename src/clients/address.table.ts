import {  Column, DataType, Model, Table } from "sequelize-typescript";
import tables from "./config";

export interface AddressNewCreationAttr {
    id?: number;

    zipCode?: string;

    country?: string;
    
    region?: string;

    city?: string;

    street?: string;

    house?: string;

    apartment?: string;

}

@Table({ tableName: tables.testAddress, paranoid:true, deletedAt: 'destroyTime'  })
export class AddressNew extends Model<AddressNew, AddressNewCreationAttr> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;


    @Column({ type: DataType.STRING, allowNull: true })
    zipCode: string;

    @Column({ type: DataType.STRING, allowNull: true })
    country: string;
    
    @Column({ type: DataType.STRING, allowNull: true })
    region: string;

    @Column({ type: DataType.STRING, allowNull: true })
    city: string;

    @Column({ type: DataType.STRING, allowNull: true })
    street: string;

    @Column({ type: DataType.STRING, allowNull: true })
    house: string;

    @Column({ type: DataType.STRING, allowNull: true })
    apartment: string;

}