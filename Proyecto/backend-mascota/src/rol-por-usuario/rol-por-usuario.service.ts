import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {RolPorUsuarioEntity} from "./rol-por-usuario.entity";
import {FindOneOptions, Repository} from "typeorm";

@Injectable()


export class RolPorUsuarioService {
    constructor(
        @InjectRepository(RolPorUsuarioEntity)
        private readonly _rolPorUsuarioRepository: Repository<RolPorUsuarioEntity>) {

    }


    async verificarRol(idUsuario: number): Promise<RolPorUsuarioEntity> {

        const consulta: FindOneOptions<RolPorUsuarioEntity> = {
            where: {
                usuario: idUsuario,

            },
            relations:['rol','usuario']
        };
        return await this._rolPorUsuarioRepository.findOne(consulta);
    }
}