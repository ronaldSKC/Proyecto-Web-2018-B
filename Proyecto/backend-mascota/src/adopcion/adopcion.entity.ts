
import {Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

import { type } from "os";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import {MascotaEntity} from "../mascota/mascota.entity";
@Entity('adopcion')
export class AdopcionEntity {
    @PrimaryGeneratedColumn({
        name : 'id_solicitud'
    })
    idSolicitud : number;


    @Column({
        name : 'telefono_celular',
        type: 'varchar',
        length: 10
    })
    telefonoCelular : string;

    @Column({
        name : 'fecha_solicitud',
        type: 'varchar',
    })

    fechaSolicitud : string;

    @Column({
        name : 'estado_solicitud',
        type: 'boolean',
    })
    estadoSolicitud : boolean;

    @Column({
        name : 'comentario',
        type: 'varchar',
    })
    comentario : string;

    @ManyToOne(
        type => MascotaEntity,
        mascota => mascota.adopciones
    )
    mascota:MascotaEntity;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.adopciones)
    usuario: UsuarioEntity;

}
