import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SedesEntity } from "./sedes.entity";
import { SedesDto } from "./dto/sedes.dto";

@Injectable()
export class SedesService {

    constructor(
        @InjectRepository(SedesEntity)
        private readonly _sedesService: Repository<SedesEntity>
    ) { }

    async findOne(id: number) {

        return await this._sedesService.findOne(id);
    }

    async findAll() {
        return await this._sedesService.find();
    }

    async create(datosCrearEventoPelicula: SedesDto) {
        return await this._sedesService.save(datosCrearEventoPelicula)
    }

    async delete(id: number) {
        return await this._sedesService.delete(id);
    }

    async update(id: number, datosEditarEventoPelicula: SedesDto) {
        const editarEventoPelicula = this.findOne(id)
        if (editarEventoPelicula) {
            return await this._sedesService.update(id, datosEditarEventoPelicula)
        } else {
            console.log('usuario no econtrado, se lo actualizara')
        }
    }

}


