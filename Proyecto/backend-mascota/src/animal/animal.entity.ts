import {Column, Entity, Index, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { type } from "os";
import { RazaEntity } from "src/raza/raza.entity";
import { MascotaEntity } from "src/mascota/mascota.entity";
@Entity('animal')
export class AnimalEntity{
    @PrimaryGeneratedColumn({
        name: 'id_animal'
    })
    idAnimal: number;
    @Column({
        name: 'nombre_animal'
    })
    nombreAnimal: string;   
    @Column({
        name: 'edad_animal'
    })
    edad: string;
    @OneToMany(
        type => RazaEntity,
        raza => raza.idRaza)
    razas : RazaEntity[]
    
}