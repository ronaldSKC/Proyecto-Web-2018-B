import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MascotaEntity} from "./mascota.entity";
import {FindManyOptions, FindOneOptions, Repository} from "typeorm";
import {RazaEntity} from "../raza/raza.entity";
import {SedesEntity} from "../sedes/sedes.entity";


@Injectable()
export class MascotaService {
    constructor(
        @InjectRepository(MascotaEntity)
        private readonly _mascotaRepository: Repository<MascotaEntity>
    ){

    }

    buscar(parametros?: FindManyOptions<MascotaEntity>): Promise<MascotaEntity[]> {
        return this._mascotaRepository.find(parametros)
    }

    async crearMascota(nuevaMascota: Mascota): Promise<MascotaEntity> {

        // Instanciar una entidad -> .create()
        const mascotaEntity = this._mascotaRepository.create(nuevaMascota);
        const mascotaCreado = await this._mascotaRepository.save(mascotaEntity);
        return mascotaCreado;
    }

    borrar(id: number): Promise<MascotaEntity> {
        const mascotaEntityEliminar = this._mascotaRepository.create({
            idMascota: id
        });
        return this._mascotaRepository.remove(mascotaEntityEliminar)
    }


    async buscarPorIdDetalle(id: number): Promise<MascotaEntity> {

        const consulta: FindOneOptions<MascotaEntity> = {
            where: {
                idMascota: id,
            },relations:['raza','sede']
        };
        return await this._mascotaRepository.findOne(consulta)
    }



    buscarPorId(id: number): Promise<MascotaEntity> {
        return this._mascotaRepository.findOne(id)
    }

    actualizar(nuevaMascota: Mascota): Promise<MascotaEntity> {

        const medicamentoEntity = this._mascotaRepository.create(nuevaMascota);
        return this._mascotaRepository.save(medicamentoEntity)
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
    sede: SedesEntity
}