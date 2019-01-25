import {Column, Entity, Index, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { type } from "os";
import { RazaEntity } from "src/raza/raza.entity";
import { MascotaEntity } from "src/mascota/mascota.entity";
@Entity('tipo_mascota')
export class TipoMascotaEntity{
    @PrimaryGeneratedColumn({
        name: 'id_tipo_mascota'
    })
        idTipoMacota: number;
    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 20,
    })
    nombre: string;

    @OneToMany(
        type => RazaEntity,
        raza => raza.tipo_mascota)
    razas : RazaEntity[]
    
}