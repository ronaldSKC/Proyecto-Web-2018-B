import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { RolEntity } from "src/rol/rol.entity";

@Entity('rol_por_usuario')
export class RolPorUsuarioEntity {

    @PrimaryGeneratedColumn({
        name: 'id_rol_por_usuario'
    })
    idRolPorUsuario: number;


    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.rolesPorUsuarios)
    usuario: UsuarioEntity;

    @ManyToOne(type => RolEntity,
        rol => rol.rolesPorUsuarios)
    rol: RolEntity;
    
}