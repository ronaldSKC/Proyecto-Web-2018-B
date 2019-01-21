import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { MascotaSedeEntity } from "src/mascota-sede/mascotaSede.entity";
import { type } from "os";
import { RazaEntity } from "src/raza/raza.entity";
import { FundacionEntity } from "src/fundacion/fundacion.entity";

@Entity('mascota')
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