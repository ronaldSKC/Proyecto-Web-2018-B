import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { MascotaSedeEntity } from "src/mascota-sede/mascotaSede.entity";
import { type } from "os";
import { RazaEntity } from "src/raza/raza.entity";
import { FundacionEntity } from "src/fundacion/fundacion.entity";

@Entity('mascota')
export class MascotaEntity{
    @PrimaryGeneratedColumn({
        name: 'id_mascota'
    })
    idMascota: number;

    @Column({
        name: ' nombre_mascota',
        type: 'varchar',
        length: 30
    })
    nombreMascota: string;

    @Column({
        name: 'genero_mascota',
        type: 'varchar',
        length: 10
    })
    generoMascota: string;

    @Column({
        name:'edad_mascota',
        type: "varchar",
        length: 2,
    })
    edadMascota: string;

    @Column({
        name:'descripcion_mascota',
        type: "varchar",
        length: 200,
    })
    descripcionMascota: string;

    @Column({
        name: 'estado_mascota',
        type: 'boolean',
    })
    estadoMascota:string;

    @Column({
        name: 'tamanio_mascota',
        type: 'varchar',
        length: 3,
    })
    tamanioMascota: string;

    @ManyToOne(
        type => RazaEntity,
        raza => raza.idRaza)
    raza : RazaEntity;

    @ManyToOne(type=> FundacionEntity,
        fundacion=>fundacion.idFundacion)
    fundacion: FundacionEntity;

    @OneToMany(type=>MascotaSedeEntity,
        mascotaSede=>mascotaSede.idMascotaSede)
    mascotasSedes: MascotaSedeEntity[];
}
