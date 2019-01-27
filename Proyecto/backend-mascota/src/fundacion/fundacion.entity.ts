import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { MascotaEntity } from "src/mascota/mascota.entity";
import { MascotaSedeEntity } from "src/mascota-sede/mascotaSede.entity";
import { SedesEntity } from "src/sedes/sedes.entity";

@Entity('fundacion')

export class FundacionEntity{
    @PrimaryGeneratedColumn({
        name: 'id_fundacion'
    })
    idFundacion : number;

    @Column({
        name: 'nombre_fundacion',
        type: 'varchar',
        length: 40
    })
    nombreFundacion: string;

    @Column({
        name: 'genero_fundacion',
        type: 'varchar',
        length: 40
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

    @OneToMany(type=> MascotaEntity,
        mascota=> mascota.fundacion)
    mascotas:MascotaEntity[]

    @OneToMany(type=> SedesEntity,
        sede=> sede.fundacion)
    sedes:SedesEntity[]
}