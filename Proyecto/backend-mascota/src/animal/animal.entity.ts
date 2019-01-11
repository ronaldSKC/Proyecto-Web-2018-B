import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class AnimalEntity{
    @PrimaryGeneratedColumn({
        name: 'id_tipo_mascota'
    })
    idTIpoMascota: number;
    @Column({
        name: 'nombre_animal'
    })
    nombreAnimal: string;   
}