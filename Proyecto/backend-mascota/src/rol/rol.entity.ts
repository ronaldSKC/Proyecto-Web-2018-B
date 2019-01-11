import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class RolEntity{
    @PrimaryGeneratedColumn({
        name: 'id_tipo_usuario'
    })
    idTipoUsuario: number;
    @Column({
        name: 'nombre_tipo_usuario'
    })
    nombreTipoUsuario: string;
}