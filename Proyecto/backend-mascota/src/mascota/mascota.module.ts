import { Module } from "@nestjs/common";
import { MascotaEntity } from "./mascota.entity";
import {TypeOrmModule} from '@nestjs/typeorm';
import {MascotaController} from "./mascota.controller";
import {MascotaService} from "./mascota.service";

import {RazaModule} from "../raza/raza.module";
import {SedesModule} from "../sedes/sedes.module";
import {UsuarioModule} from "../usuario/usuario.module";
import {AdopcionModule} from "../adopcion/adopcion.module";

@Module({
        imports: [
            TypeOrmModule.forFeature([MascotaEntity]),RazaModule,SedesModule, UsuarioModule,AdopcionModule],
        controllers: [MascotaController],
        providers: [MascotaService],
        exports: [MascotaService]
    }
)
export class MascotaModule{
}