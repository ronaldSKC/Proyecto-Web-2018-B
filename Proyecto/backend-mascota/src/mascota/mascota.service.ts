import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {MascotaEntity} from "./mascota.entity";
import {Repository} from "typeorm";
@Injectable()

export class MascotaService {
    constructor(
        @InjectRepository(MascotaEntity)
        private readonly _mascotaRepository: Repository<MascotaEntity>
    ){

    }

}