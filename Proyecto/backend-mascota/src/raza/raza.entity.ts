import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { type } from "os";
import { MascotaEntity } from "src/mascota/mascota.entity";
import {EspecieEntity} from "../especie/especie.entity";

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
        type=>EspecieEntity,
        especie=> especie.razas)
    especie: EspecieEntity;

    @OneToMany(
        type=> MascotaEntity,
        mascota => mascota.idMascota)
    mascotas: MascotaEntity[]
}