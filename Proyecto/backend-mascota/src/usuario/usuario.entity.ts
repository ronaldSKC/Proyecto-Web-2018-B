import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
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
}
