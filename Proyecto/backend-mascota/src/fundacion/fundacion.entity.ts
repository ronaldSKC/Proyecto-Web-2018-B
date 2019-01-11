import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 

export class FundacionEntity{
    @PrimaryGeneratedColumn({
        name: 'id_mascota'
    })
    idMascota : number;
    @Column({
        name: 'nombre_fundacion'
    })
    nombreFundacion: string;
    @Column({
        name: 'genero_fundacion'
    })
    generoFundacion : string;
    @Column({
        name: 'edad_fundacion'
    })
    edadFundacion: string;
    @Column({
        name: 'descripcion_fundacion'
    })
    descripcionFundacion: string;
    @Column({
        name: 'estado_fundacion'
    })
    estadoFundacion: string;
    @Column({
        name: 'tamanio_fundacion'
    })
    tamanioFundacion: string;
}