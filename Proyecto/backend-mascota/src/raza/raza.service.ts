import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {RazaEntity} from "./raza.entity";
import {Repository, FindManyOptions} from "typeorm";
import { RazaDto } from "./dto/raza.dto";

@Injectable()

export class RazaService {
    constructor(
        @InjectRepository(RazaEntity)
        private readonly _razaRepository: Repository<RazaEntity>)
{}

    obtenerRaza(): Promise<RazaEntity[]> {
        return this._razaRepository.find()
    }
    obtenerRol(): Promise<RazaEntity[]> {
        return this._razaRepository.find()
    }
    async findOne(id: number): Promise<RazaEntity> {

        return await this._razaRepository.findOne(id);
    }

    async findAll(parametros?: FindManyOptions<RazaEntity>): Promise<RazaEntity[]> {
        return await this._razaRepository.find(parametros)
    
    }

    async create(datosCrearEventoPelicula: RazaDto) {
        return await this._razaRepository.save(datosCrearEventoPelicula)
    }

    async delete(idRaza: number):Promise<RazaEntity> {
        const sedeEntityAEliminar = this._razaRepository
        .create({
            idRaza:idRaza
        })
        return await this._razaRepository.remove(sedeEntityAEliminar);
    }

    async update(nuevaRaza: RazaDto): Promise<RazaEntity> {

        const medicamentoEntity = this._razaRepository.create(nuevaRaza);
        return this._razaRepository.save(medicamentoEntity)
    }

}