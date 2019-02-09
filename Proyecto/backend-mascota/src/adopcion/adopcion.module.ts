import { Module } from "@nestjs/common";
import { AdopcionEntity } from "./adopcion.entity";
import {TypeOrmModule} from '@nestjs/typeorm';
import { AdopcionController } from "./adopcion.controller";
import {AdopcionService} from "./adopcion.service";
import {MascotaModule} from "../mascota/mascota.module";
import {UsuarioModule} from "../usuario/usuario.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([AdopcionEntity]),UsuarioModule],
    controllers: [
        AdopcionController
    ],
    providers: [
        AdopcionService

    ],
    exports: [
        AdopcionService

    ]
})
export class AdopcionModule{

}