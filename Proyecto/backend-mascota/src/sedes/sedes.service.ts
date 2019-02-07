import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {FindOneOptions, Repository} from "typeorm";
import {SedesEntity} from "./sedes.entity";

@Injectable()


export class SedesService {
    constructor(
        @InjectRepository(SedesEntity)
        private readonly _sedesRepository: Repository<SedesEntity>) {

    }

    obtenerRol(): Promise<SedesEntity[]> {
        return this._sedesRepository.find()
    }


}