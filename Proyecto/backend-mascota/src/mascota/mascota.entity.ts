import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { type } from "os";
import { RazaEntity } from "src/raza/raza.entity";
import {SedesEntity} from "../sedes/sedes.entity";
import {AdopcionEntity} from "../adopcion/adopcion.entity";


@Entity('mascota')
export class MascotaEntity{
    @PrimaryGeneratedColumn({
        name: 'id_mascota'
    })
    idMascota: number;

    @Column({
        name: ' nombre',
        type: 'varchar',
        length: 30
    })
    nombreMascota: string;

    @Column({
        name: 'genero',
        type: 'varchar',
        length: 6
    })
    generoMascota: string;

    @Column({
        name:'edad_aproximada',
        type: "int",
    })
    edadMascota: number;


    @Column({
        name: 'tamanio',
        type: 'float',
    })
    tamanioMascota: number;

    @Column({
        name: 'color',
        type: 'varchar',
        length: 10,
    })
    colorMascota: string;

    @Column({
        name:'foto_mascota',
        type: 'varchar',
    })
    fotoMascota: string;

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
    estadoMascota:boolean;


    @ManyToOne(
        type => RazaEntity,
        raza => raza.mascotas)
    raza : RazaEntity;

    @OneToMany(
        type => AdopcionEntity,
        adopcion => adopcion.mascota)
    adopciones: AdopcionEntity[];

    @ManyToOne(
        type=>SedesEntity,
        sede=>sede.mascotas)
    sede: SedesEntity;
}
