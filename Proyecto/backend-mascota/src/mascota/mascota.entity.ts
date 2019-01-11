import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MascotaEntity{
    @PrimaryGeneratedColumn()
    idMascota: number;
    @Column({
        name: ' nombre_mascota'
    })
    nombreMascota: string;
    @Column({
        name: 'genero_mascota'
    })
    generoMascota: string;
    @Column({
        name:'edad_mascota'
    })
    edadMascota: string;
    @Column({
        name: 'descripcion_mascota'
    })
    descripcionMascota: string;
    @Column({
        name: 'estado_mascota'
    })
    estadoMascota:string;
    @Column({
        name: 'tamanio_mascota'
    })
    tamanioMascota: string;
}