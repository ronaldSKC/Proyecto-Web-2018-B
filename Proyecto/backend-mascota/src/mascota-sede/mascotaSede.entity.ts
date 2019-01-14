import {Column, Entity, Index, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { type } from "os";
import { AdopcionEntity } from "src/adopcion/adopcion.entity";
import { MascotaEntity } from "src/mascota/mascota.entity";
@Entity()
export class MascotaSedeEntity {
    @OneToMany(
        type => AdopcionEntity,
        adopcion => adopcion.mascotaSede
    )
    adopciones: AdopcionEntity[];
    @ManyToOne(
        type=>MascotaEntity,
        mascota => mascota.mascotaSede)
    mascotas : MascotaSedeEntity[];
}
