import {Controller, Module} from "@nestjs/common";

import {TypeOrmModule} from "@nestjs/typeorm";


import {UsuarioModule} from "../usuario/usuario.module";
import {SedesEntity} from "./sedes.entity";
import {SedesController} from "./sedes.controller";
import {SedesService} from "./sedes.service";


@Controller('rol-por-usuario')

@Module(
    {
        imports:[TypeOrmModule.forFeature([SedesEntity])],
        controllers:[SedesController],
        providers:[SedesService],
        exports:[SedesService]
    }
)

export class SedesModule{

}