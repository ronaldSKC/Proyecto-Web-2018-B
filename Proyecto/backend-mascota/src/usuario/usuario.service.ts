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
                emailUsuario: correo,
                passwordUsuario: password
            },
        };
        return await this._usuarioRepository.findOne(consulta)

    }


    buscar(parametros?: FindManyOptions<UsuarioEntity>): Promise<UsuarioEntity[]> {
        return this._usuarioRepository.find(parametros)
    }


    async crear(nuevoUsuario: Usuario): Promise<UsuarioEntity> {

        // Instanciar una entidad -> .create()
        const usuarioEntity = this._usuarioRepository.create(nuevoUsuario);
        const usuarioCreado = await this._usuarioRepository.save(usuarioEntity);
        return usuarioCreado;
    }


    borrar(id: number): Promise<UsuarioEntity> {
        const usuarioEntityEliminar = this._usuarioRepository.create({
            idUsuario: id
        });
        return this._usuarioRepository.remove(usuarioEntityEliminar)
    }

    buscarPorId(id: number): Promise<UsuarioEntity> {
        return this._usuarioRepository.findOne(id)
    }



    }


   export interface Usuario{
    idUsuario?:number;
    nickname: string;
    nombreCompletoUsuario:string;
    direccionUsuario: string;
    telefonoUsuario: string;
    emailUsuario:string;
    passwordUsuario:string;
    fotoUsuario:string;

   }



