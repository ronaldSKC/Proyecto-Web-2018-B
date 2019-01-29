import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { type } from "os";

@Entity('tipo_usuario')
export class TipoUsuarioEntity{
    @PrimaryGeneratedColumn({
        name: 'id_tipo_usuario'
    })
    idTipoUsuario: number;
    @Column({
        name: 'nombre_tipo_usuario'
    })
    nombreTipoUsuario: string;
    @OneToMany(type => UsuarioEntity, 
        usuario => usuario.idUsuario)
    usuarios : UsuarioEntity[]
}