import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, FindManyOptions } from "typeorm";
import { SedesEntity } from "./sedes.entity";
import { SedesDto } from "./dto/sedes.dto";

@Injectable()
export class SedesService {

    constructor(
        @InjectRepository(SedesEntity)
        private readonly _sedesRepository: Repository<SedesEntity>
    ) { }
    obtenerRol(): Promise<SedesEntity[]> {
        return this._sedesRepository.find()
    }
    async findOne(id: number) {

        return await this._sedesRepository.findOne(id);
    }

    async findAll(parametros?: FindManyOptions<SedesEntity>): Promise<SedesEntity[]> {
        return await this._sedesRepository.find(parametros)
    
    }

    async create(datosCrearEventoPelicula: SedesDto) {
        return await this._sedesRepository.save(datosCrearEventoPelicula)
    }

    async delete(idSede: number):Promise<SedesEntity> {
        const sedeEntityAEliminar = this._sedesRepository
        .create({
            idSedes:idSede
        })
        return await this._sedesRepository.remove(sedeEntityAEliminar);
    }

    async update(nuevaMascota: SedesDto): Promise<SedesEntity> {

        const medicamentoEntity = this._sedesRepository.create(nuevaMascota);
        return this._sedesRepository.save(medicamentoEntity)
    }

}


