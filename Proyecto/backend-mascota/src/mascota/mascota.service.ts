import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MascotaEntity} from "./mascota.entity";
import {Repository} from "typeorm";
import {RazaEntity} from "../raza/raza.entity";


@Injectable()
export class MascotaService {
    constructor(
        @InjectRepository(MascotaEntity)
        private readonly _mascotaRepository: Repository<MascotaEntity>
    ){

    }

}

export interface Mascota{
    idMascota?: number
    nombreMascota: string
    generoMascota: string
    edadMascota: number
    tamanioMascota: number
    colorMascota: string
    descripcionMascota: string
    fotoMascota: string
    estadoMascota: boolean
    raza: RazaEntity
}