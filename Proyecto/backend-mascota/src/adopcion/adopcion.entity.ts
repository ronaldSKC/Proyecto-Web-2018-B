
import {Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { MascotaSedeEntity } from "src/mascota-sede/mascotaSede.entity";
@Entity()
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
    @ManyToOne(
        type => MascotaSedeEntity,
        mascotaSede => mascotaSede.adopciones
    )
    mascotaSede : MascotaSedeEntity;

}
