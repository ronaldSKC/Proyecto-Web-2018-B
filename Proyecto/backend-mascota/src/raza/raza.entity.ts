import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { type } from "os";
import { MascotaEntity } from "src/mascota/mascota.entity";
import {TipoMascotaEntity} from "../tipoMascota/tipo_mascota.entity";

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
        type=>TipoMascotaEntity,
        tipo_mascota=> tipo_mascota.razas)
    tipo_mascota: TipoMascotaEntity;

    @OneToMany(
        type=> MascotaEntity,
        mascota => mascota.idMascota)
    mascotas: MascotaEntity[]
}