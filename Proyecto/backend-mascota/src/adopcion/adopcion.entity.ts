
import {Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { MascotaSedeEntity } from "src/mascota-sede/mascotaSede.entity";
import { type } from "os";
import { UsuarioEntity } from "src/usuario/usuario.entity";
@Entity('adopcion')
export class AdopcionEntity {
    @PrimaryGeneratedColumn({
        name : 'id_solicitud'
    })
    idSolicitud : number;

    @Column({
        name : 'telefono',
        type: 'varchar',
        length: 10
    })
    telefono : string;

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
    estadoSolicitud : string;

    @ManyToOne(
        type => MascotaSedeEntity,
        mascotaSede => mascotaSede.adopciones)
    mascotaSede: MascotaSedeEntity;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.adopciones)
    usuario: UsuarioEntity;

}
