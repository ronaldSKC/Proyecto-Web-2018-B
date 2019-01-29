import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

import { type } from "os";
import {MascotaEntity} from "../mascota/mascota.entity";


@Entity('sedes')
export class SedesEntity{
    @PrimaryGeneratedColumn ()
    idSedes: number;


    @Column({
        name: 'ciudad',
        type: 'varchar',
        length: 40
    })
    ciudad: string;

    @Column({
        name: 'calle_principal',
        type: 'varchar',
        length: 40
    })
    callePrincipal: string;

    @Column({
        name: 'calle_secundaria',
        type: 'varchar',
        length: 40
    })
    calleSecundaria: string;

    @Column(
        {
            name: 'referencia',
            type: 'varchar',
            length: 40
        }
    )
    referencia: string;



    @ManyToOne(
        type => MascotaEntity,
        mascota => mascota.sedes)
    mascota : MascotaEntity;
}
