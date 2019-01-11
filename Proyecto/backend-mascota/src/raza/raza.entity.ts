import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class RazaEntity{
    @PrimaryGeneratedColumn({
        name:'id_raza'
    })
    idRaza: number;
    @Column({
        name : 'nombre_raza'
    })
    nombreRaza: string;
}