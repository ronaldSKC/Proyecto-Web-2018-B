import {Column, Entity, Index, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { type } from "os";
import { AdopcionEntity } from "src/adopcion/adopcion.entity";
import { MascotaEntity } from "src/mascota/mascota.entity";
import { FundacionEntity } from "src/fundacion/fundacion.entity";
import { SedesEntity } from "src/sedes/sedes.entity";
@Entity('mascota_sede')
export class MascotaSedeEntity {
    @PrimaryGeneratedColumn()
    idMascotaSede: number;

    @ManyToOne(
        type=> MascotaEntity,
        mascota=>mascota.mascotasSedes)
    mascota:MascotaEntity;

    @ManyToOne(
        type=> SedesEntity,
        sede=>sede.idSedes)
    sede:MascotaEntity;

    @OneToMany(type =>AdopcionEntity,
        adopcion => adopcion.mascotaSede)
    adopciones : AdopcionEntity[]
}

