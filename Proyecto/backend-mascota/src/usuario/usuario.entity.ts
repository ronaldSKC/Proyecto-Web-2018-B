import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { AdopcionEntity } from "src/adopcion/adopcion.entity";
import { type } from "os";
import { RolPorUsuarioEntity } from "src/rol-por-usuario/rolPorUsuario.entity";

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn({
        name: 'id_usuario'
    })
    idUsuario: number;
    @Column({
        name: 'nickname'
    })
    nickname: string;
    @Column({
        name: 'nombre_usuario'
    })
    nombreCompletoUsuario: string;
    @Column({
        name: 'direccion_usuario'
    })
    direccionUsuario: string;
    @Column({
        name: 'telefono_usuario'
    })
    telefonoUsuario: string;
    @Column({
        name: 'email_usuario'
    })
    emailUsuario: string;
    @Column({
        name: 'password_usuario'
    })
    passwordUsuario: string;
    @OneToMany(type => AdopcionEntity,
        adopcion => adopcion.idSolicitud)
    adopciones: AdopcionEntity[]
    @OneToMany(type => RolPorUsuarioEntity,
        rolPorUsuario => rolPorUsuario.idRolPorUsuario)
    rolesPorUsuarios: RolPorUsuarioEntity[]
}
