import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { type } from "os";
import { AnimalEntity } from "src/animal/animal.entity";
import { MascotaEntity } from "src/mascota/mascota.entity";

@Entity('raza')
export class RazaEntity{
    @PrimaryGeneratedColumn({
        name:'id_raza'
    })
    idRaza: number;
    @Column({
        name : 'nombre_raza'
    })
    nombreRaza: string;
    @ManyToOne(
        type=>AnimalEntity,
        animal=> animal.idAnimal)
    animal: RazaEntity
    @OneToMany(
        type=> MascotaEntity,
        mascota => mascota.idMascota)
    mascotas: MascotaEntity[]
}