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
        name: 'nickname',
        type: 'varchar',
        length: 30
    })
    nickname: string;
    @Column({
        name: 'nombre_completo',
        type: 'varchar',
        length: 40
    })
    nombreCompletoUsuario: string;

    @Column({
        name: 'direccion_usuario',
        type: 'varchar',
        length: 60
    })
    direccionUsuario: string;

    @Column({
        name: 'telefono_usuario',
        type: 'varchar',
        length: 10
    })
    telefonoUsuario: string;

    @Column({
        name: 'email_usuario',
        type: 'varchar',
        length: 40
    })
    emailUsuario: string;

    @Column({
        name: 'password_usuario',
        type: 'varchar',
        length: 20
    })
    passwordUsuario: string;

    @OneToMany(
        type => AdopcionEntity,
        adopcion => adopcion.usuario)
    adopciones: AdopcionEntity[];

    @OneToMany(type => RolPorUsuarioEntity,
        rolPorUsuario => rolPorUsuario.usuario)
    rolesPorUsuarios: RolPorUsuarioEntity[]
}
