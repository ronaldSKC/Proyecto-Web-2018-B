import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {RazaEntity} from "./raza.entity";
import {FindManyOptions, Repository} from "typeorm";

@Injectable()

export class RazaService {
    constructor(
        @InjectRepository(RazaEntity)
        private readonly _razaRepository: Repository<RazaEntity>)
{}


    obtenerRaza(): Promise<RazaEntity[]> {
        return this._razaRepository.find()
    }


    obtenerRazasPorEspecie(parametros:FindManyOptions<RazaEntity>): Promise<RazaEntity[]> {
        return this._razaRepository.find(parametros)
    }
}