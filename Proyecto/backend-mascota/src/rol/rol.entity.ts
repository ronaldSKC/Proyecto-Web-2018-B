import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RolPorUsuarioEntity } from "src/rol-por-usuario/rol-por-usuario.entity";

@Entity('rol')
export class RolEntity{
    @PrimaryGeneratedColumn({
        name: 'id_rol'
    })
    idRol: number;

    @Column({
        name: 'nombre_rol'
    })
    nombreRol: string;

    @OneToMany(
        type => RolPorUsuarioEntity,
        rolPorUsuario => rolPorUsuario.rol)
    rolesPorUsuarios : RolPorUsuarioEntity[]
}