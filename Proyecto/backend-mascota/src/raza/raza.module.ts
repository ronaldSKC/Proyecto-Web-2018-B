import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";

import {RazaEntity} from "./raza.entity";
import {RazaController} from "./raza.controller";
import {RazaService} from "./raza.service";


@Module(
    {
        imports:[TypeOrmModule.forFeature([RazaEntity])],
        controllers:[RazaController],
        providers:[RazaService],
        exports:[RazaService]

    }
)

export class RazaModule {

}