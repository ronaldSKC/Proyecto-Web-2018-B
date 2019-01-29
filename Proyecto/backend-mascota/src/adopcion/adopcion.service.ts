import { Injectable } from "@nestjs/common";
import { AdopcionEntity } from "./adopcion.entity";
import {InjectRepository, Repository} from "@nestjs/typeorm";
import { Adopcion } from "./adopcion.controller";
import { FindManyOptions} from "typeorm";
@Injectable()
export class AdopcionService{
    
    constructor(
        @InjectRepository(AdopcionEntity)
        private readonly _adopcionRepository: Repository<AdopcionEntity>
    ){
    }
    crearAdopcion (adopcion : Adopcion): Promise<AdopcionEntity>{
        const adopcionEntity : AdopcionEntity = this._adopcionRepository
        .create(adopcion);
        return this._adopcionRepository.save(adopcionEntity)
    }
    actualizarAdopcion (adopcion : Adopcion): Promise<AdopcionEntity>{
        const adopcionEntity : AdopcionEntity = this._adopcionRepository
        .create(adopcion);
        return this._adopcionRepository.save(adopcionEntity)
    }
    eliminarAdopcion (idAdopcion: number) : Promise<AdopcionEntity>{
        const adopcionEliminar : AdopcionEntity = this._adopcionRepository
        .create({
            id: idAdopcion
        });
        return this._adopcionRepository.remove(adopcionEliminar)
    }
    buscarPorIDAdopcion(idAdopcion: number): Promise<AdopcionEntity>{
        return this._adopcionRepository.findOne(idAdopcion);
    }
    buscarAdopcion(parametrosBusqueda?: FindManyOptions<AdopcionEntity>)
        :Promise<AdopcionEntity[]>{
            return this._adopcionRepository.find(parametrosBusqueda);
        }
}