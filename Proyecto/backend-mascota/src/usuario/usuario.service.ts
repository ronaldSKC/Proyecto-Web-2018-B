import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {FindManyOptions, Repository} from "typeorm";

@Injectable()

export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)

        private readonly _usuarioRepository: Repository<UsuarioEntity>) {
    }

    async autenticar(correo: string, password: string): Promise<UsuarioEntity> {

        const consulta: FindManyOptions<UsuarioEntity> = {
            where: {
                correo: correo,
                password: password
            },
        };
        return await this._usuarioRepository.findOne(consulta)

    }

    }




