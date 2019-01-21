
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
        name : 'telefono'
    })
    telefono : string;
    @Column({
        name : 'telefono_celular'
    })
    telefonoCelular : string;
    @Column({
        name : 'fecha_solicitud'
    })
    fechaSolicitud : string;
    @Column({
        name : 'estado_solicitud'
    })
    estadoSolicitud : string;
    @ManyToOne(type => MascotaSedeEntity,
        mascotaSede => mascotaSede.idMascotaSede)
    mascotaSede: MascotaSedeEntity;
    @ManyToOne(type => UsuarioEntity,
        usuario => usuario.idUsuario)
    usuario: UsuarioEntity;

}
