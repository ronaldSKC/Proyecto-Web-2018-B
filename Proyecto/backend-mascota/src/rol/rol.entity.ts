import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RolPorUsuarioEntity } from "src/rol-por-usuario/rolPorUsuario.entity";

@Entity('rol')
export class RolEntity{
    @PrimaryGeneratedColumn({
        name: 'id_rol'
    })
    idRol: number;
    @Column({
        name: 'nombre_tipo_usuario'
    })
    nombreRol: string;
    @OneToMany(type => RolPorUsuarioEntity,
        rolPorUsuario => rolPorUsuario.idRolPorUsuario)
    rolesPorUsuarios : RolPorUsuarioEntity[]
}