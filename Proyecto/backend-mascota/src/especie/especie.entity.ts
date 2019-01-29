import {Column, Entity, Index, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { type } from "os";
import { RazaEntity } from "src/raza/raza.entity";
import { MascotaEntity } from "src/mascota/mascota.entity";
@Entity('especie')
export class EspecieEntity{
    @PrimaryGeneratedColumn({
        name: 'id_especie'
    })
    idEspecie: number;

    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 20,
    })
    nombre: string;

    @OneToMany(
        type => RazaEntity,
        raza => raza.especie)
    razas : RazaEntity[]

}