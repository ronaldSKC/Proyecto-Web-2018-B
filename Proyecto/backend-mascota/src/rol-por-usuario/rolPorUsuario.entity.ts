import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { RolEntity } from "src/rol/rol.entity";

@Entity('rol_por_usuario')
export class RolPorUsuarioEntity {
    @PrimaryGeneratedColumn()
    idRolPorUsuario: number;
    @ManyToOne(type => UsuarioEntity,
        usuario => usuario.idUsuario)
    usuario: UsuarioEntity;
    @ManyToOne(type => RolEntity,
        rol => rol.idRol)
    rol: UsuarioEntity;
    
}